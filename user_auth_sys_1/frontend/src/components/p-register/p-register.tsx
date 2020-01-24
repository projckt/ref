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
        <p>
          Already Registered?{" "}
          <stencil-route-link url="/login">Login Now</stencil-route-link>
        </p>
      </div>
    );
  }
}
