import { Component, h } from "@stencil/core";
// import { utils } from "../../global/utils";

@Component({
  tag: "p-login",
  styleUrl: "p-login.css"
})
export class PLogin {
  private Email: string = "";
  private Password: string = "";

  handleEmailIp(event) {
    this.Email = event.target.value;
  }

  handlePasswordIp(event) {
    this.Password = event.target.value;
  }

  handleLoginClick(event) {
    event.preventDefault();
    let payload = { Email: this.Email, Password: this.Password };
    let url = "http://localhost:1945/login";
    let options = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    };
    fetch(url, options)
      .then(res => {
        res.json();
      })
      .then(data => {
        // if (data.status === "success") {
        //   console.log("user logged in");
        //   // return true;
        // } else if (data.status === "failed") {
        //   console.log("login failed");
        //   // return false;
        // }
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
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
