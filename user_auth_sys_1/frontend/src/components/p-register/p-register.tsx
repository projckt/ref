import { Component, h } from "@stencil/core";

@Component({
  tag: "p-register",
  styleUrl: "p-register.css"
})
export class PRegister {
  render() {
    return (
      <div>
        <h1>Register</h1>>
        <stencil-route-link url="/login">
          <button>Login</button>
        </stencil-route-link>
      </div>
    );
  }
}
