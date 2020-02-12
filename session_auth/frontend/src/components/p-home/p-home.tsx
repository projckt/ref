import { Component, h } from "@stencil/core";
import { check } from "../../global/utils";

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
        <h2>Home Page</h2>
        {check.cookie.isLogged() ? (
          <c-logout-btn></c-logout-btn>
        ) : (
          <c-nav></c-nav>
        )}
      </div>
    );
  }
}
