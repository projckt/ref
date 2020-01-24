import { Component, h } from "@stencil/core";

@Component({
  tag: "p-dashboard",
  styleUrl: "p-dashboard.css"
})
export class PDashboard {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <button>Logout</button>
      </div>
    );
  }
}
