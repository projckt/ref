import { Component, h, Prop } from "@stencil/core";
import { RouterHistory } from "@stencil/router";

@Component({
  tag: "p-register",
  styleUrl: "p-register.css"
})
export class PRegister {
  @Prop() history: RouterHistory;
  private firstName: string = "";
  private lastName: string = "";
  private email: string = "";
  private password: string = "";
  private passwordConfirmation: string = "";

  handleFirstNameIp(event) {
    this.firstName = event.target.value;
  }
  handleLastNameIp(event) {
    this.lastName = event.target.value;
  }
  handleEmailIp(event) {
    this.email = event.target.value;
  }
  handlePasswordIp(event) {
    this.password = event.target.value;
  }
  handlePasswordConfirmationIp(event) {
    this.passwordConfirmation = event.target.value;
  }

  handleRegisterClick(event) {
    event.preventDefault();
    let payload = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      passwordConfirmation: this.passwordConfirmation
    };
    let url = "http://localhost:1945/register";
    let options = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    };
    fetch(url, options)
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (data.status === "success") this.history.push("/dashboard", {});
        else alert("Registration failed!");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h2>Register</h2>
        <input
          type="email"
          placeholder="First Name"
          value=""
          onInput={(event: UIEvent) => this.handleFirstNameIp(event)}
        ></input>
        <input
          type="email"
          placeholder="Last Name"
          value=""
          onInput={(event: UIEvent) => this.handleLastNameIp(event)}
        ></input>
        <br />
        <br />
        <input
          type="email"
          placeholder="Your Email"
          value=""
          onInput={(event: UIEvent) => this.handleEmailIp(event)}
        ></input>
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          value=""
          onInput={(event: UIEvent) => this.handlePasswordIp(event)}
        ></input>
        <br />
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          value=""
          onInput={(event: UIEvent) => this.handlePasswordConfirmationIp(event)}
        ></input>
        <br />
        <br />
        <button onClick={(event: UIEvent) => this.handleRegisterClick(event)}>
          Register
        </button>
        <p class="subtext">
          Already Registered?{" "}
          <stencil-route-link url="/login">Login Now</stencil-route-link>
        </p>
      </div>
    );
  }
}
