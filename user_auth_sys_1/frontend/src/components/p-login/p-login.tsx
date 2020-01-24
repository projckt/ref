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
        <stencil-route-link url="/register">
          <button>Register</button>
        </stencil-route-link>
      </div>
    );
  }
}
