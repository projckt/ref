import { Component, h } from "@stencil/core";

@Component({
  tag: "p-register",
  styleUrl: "p-register.css"
})
export class PRegister {
  render() {
    return (
      <div>
        <h2>Register</h2>
        <stencil-route-link url="/login">
          <button>Login</button>
        </stencil-route-link>
      </div>
    );
  }
}
