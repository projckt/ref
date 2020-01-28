import { Component, h, Prop } from "@stencil/core";
import { utils } from "../../global/utils";
import { RouterHistory } from "@stencil/router";

@Component({
  tag: "p-register",
  styleUrl: "p-register.css"
})
export class PRegister {
  @Prop() history: RouterHistory;
  private FirstName: string = "";
  private LastName: string = "";
  private Email: string = "";
  private Password: string = "";

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
    let isUserRegistered = utils.registerUser(
      this.FirstName,
      this.LastName,
      this.Email,
      this.Password
    );

    if (isUserRegistered) this.history.push("/login");
    else alert("Sorry! Registration Failed. Please try a little later.");
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
          type="password"
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
