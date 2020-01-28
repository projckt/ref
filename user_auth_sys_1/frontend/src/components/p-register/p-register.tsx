import { Component, h } from "@stencil/core";

@Component({
  tag: "p-register",
  styleUrl: "p-register.css"
})
export class PRegister {
  handleFirstNameIp(event) {
    console.log(`First Name: ${event.detail}`);
  }
  handleLastNameIp(event) {
    console.log(`Lasr Name: ${event.detail}`);
  }
  handleEmailIp(event) {
    console.log(`Email: ${event.detail}`);
  }
  handlePasswordIp(event) {
    console.log(`Password: ${event.detail}`);
  }
  render() {
    return (
      <div>
        <h2>Register</h2>
        <input
          type="email"
          placeholder="First Name"
          onInput={(event: UIEvent) => this.handleFirstNameIp(event)}
        ></input>
        <input
          type="email"
          placeholder="Last Name"
          onInput={(event: UIEvent) => this.handleLastNameIp(event)}
        ></input>
        <br />
        <br />
        <input
          type="email"
          placeholder="Your Email"
          onInput={(event: UIEvent) => this.handleEmailIp(event)}
        ></input>
        <br />
        <br />
        <input
          type="email"
          placeholder="Password"
          onInput={(event: UIEvent) => this.handlePasswordIp(event)}
        ></input>
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
