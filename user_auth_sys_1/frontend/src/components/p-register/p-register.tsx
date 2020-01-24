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
        <input type="email" placeholder="First Name"></input>
        <input type="email" placeholder="Last Name"></input>
        <br />
        <br />
        <input type="email" placeholder="Your Email"></input>
        <br />
        <br />
        <input type="email" placeholder="Password"></input>
        <br />
        <br />
        <button>Register</button>
        <p class="subtext">
          Already Registered?{" "}
          <stencil-route-link url="/login">Login Now</stencil-route-link>
        </p>
      </div>
    );
  }
}
