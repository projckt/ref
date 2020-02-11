import { Component, h, Prop } from "@stencil/core";
import { utils } from "../../global/utils";
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
    let isUserRegistered = utils.registerUser(
      this.firstName,
      this.lastName,
      this.email,
      this.password,
      this.passwordConfirmation
    );
    if (!isUserRegistered)
      alert("Sorry! Registration Failed. Please try a little later.");

    this.history.push("/login", {});
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
          type="text"
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
