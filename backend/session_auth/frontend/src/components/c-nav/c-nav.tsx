import { Component, h } from "@stencil/core";

@Component({
  tag: "c-nav",
  styleUrl: "c-nav.css"
})
export class CNav {
  render() {
    return (
      <div>
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
