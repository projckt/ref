import { Component, h } from "@stencil/core";

@Component({
  tag: "p-dashboard",
  styleUrl: "p-dashboard.css"
})
export class PDashboard {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <br />
        <p>Hello </p>
        <br />
        <c-logout-btn></c-logout-btn>
      </div>
    );
  }
}
