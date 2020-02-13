import { Component, h } from "@stencil/core";
import { isUserLogged } from "../../utils/";

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
        {isUserLogged() ? <c-logout-btn></c-logout-btn> : <c-nav></c-nav>}
      </div>
    );
  }
}
