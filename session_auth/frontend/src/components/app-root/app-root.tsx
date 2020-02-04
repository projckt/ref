import { Component, h } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true
})
export class AppRoot {
  render() {
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" component="p-login" exact={true} />
          <stencil-route url="/register" component="p-register" />
          <stencil-route url="/login" component="p-login" />
          <stencil-route url="/dashboard" component="p-dashboard" />
          <stencil-route url="/settings" component="p-settings" />
          <stencil-route component="p-catchall" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}
