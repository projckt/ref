import { Component, h, Prop } from "@stencil/core";
import { RouterHistory, injectHistory } from "@stencil/router";

@Component({
  tag: "p-login",
  styleUrl: "p-login.css"
})
export class PLogin {
  @Prop() history: RouterHistory;
  private email: string = "";
  private password: string = "";

  handleEmailIp(event) {
    this.email = event.target.value;
  }

  handlePasswordIp(event) {
    this.password = event.target.value;
  }

  handleLoginClick(event) {
    event.preventDefault();
    let payload = { email: this.email, password: this.password };
    let url = "http://localhost:1945/login";
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
        if (data.status === "success") {
          this.history.replace("/dashboard");
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Enter Email"
          value=""
          onInput={(event: UIEvent) => this.handleEmailIp(event)}
        ></input>
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value=""
          onInput={(event: UIEvent) => this.handlePasswordIp(event)}
        ></input>
        <br />
        <br />
        <button onClick={(event: UIEvent) => this.handleLoginClick(event)}>
          Login
        </button>
        <br />
        <br />
        <p class="subtext">
          Don't have an account?{" "}
          <stencil-route-link url="/register">Register Now</stencil-route-link>
        </p>
      </div>
    );
  }
}

injectHistory(PLogin);
