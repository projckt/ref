import { Component, h } from "@stencil/core";
import { utils } from "../../global/utils";

@Component({
  tag: "p-register",
  styleUrl: "p-register.css"
})
export class PRegister {
  private FirstName: string;
  private LastName: string;
  private Email: string;
  private Password: string;

  componentWillLoad() {
    utils.test();
  }

  handleFirstNameIp(event) {
    this.FirstName = event.target.value;
  }
  handleLastNameIp(event) {
    this.LastName = event.target.value;
  }
  handleEmailIp(event) {
    this.Email = event.target.value;
  }
  handlePasswordIp(event) {
    this.Password = event.target.value;
  }

  handleRegisterClick(event) {
    event.preventDefault();
    utils.registerUser(
      this.FirstName,
      this.LastName,
      this.Email,
      this.Password
    );
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
          type="email"
          placeholder="Password"
          value=""
          onInput={(event: UIEvent) => this.handlePasswordIp(event)}
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
