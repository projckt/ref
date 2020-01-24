import { Component, h } from "@stencil/core";

@Component({
  tag: "p-login",
  styleUrl: "p-login.css"
})
export class PLogin {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <input type="email" placeholder="Enter Email"></input>
        <br />
        <br />
        <input type="password" placeholder="Enter Password"></input>
        <br />
        <br />
        <button>Login</button>
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
