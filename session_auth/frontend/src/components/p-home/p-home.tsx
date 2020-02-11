import { Component, h } from "@stencil/core";

@Component({
  tag: "p-home",
  styleUrl: "p-home.css"
})
export class PHome {
  componentWillLoad() {
    console.log(`cookie: ${document.cookie}`);
  }

  render() {
    return (
      <div>
        <h2>Welcome</h2>
        <stencil-route-link url="/login">
          <button>Login</button>
        </stencil-route-link>
        &nbsp;&nbsp;
        <stencil-route-link url="/register">
          <button>Register</button>
        </stencil-route-link>
      </div>
    );
  }
}
