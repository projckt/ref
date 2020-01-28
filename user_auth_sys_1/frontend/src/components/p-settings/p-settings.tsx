import { Component, h } from "@stencil/core";

@Component({
  tag: "p-settings",
  styleUrl: "p-settings.css"
})
export class PSettings {
  render() {
    return (
      <div>
        <h2>Settings</h2>
        <br />
        <p>Hello Name</p>
        <br />
        <button>Logout</button>
      </div>
    );
  }
}
