import { Component, h } from "@stencil/core";

@Component({
  tag: "p-login",
  styleUrl: "p-login.css"
})
export class PLogin {
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
    console.log(`email: ${this.email} , password: ${this.password}`);
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
