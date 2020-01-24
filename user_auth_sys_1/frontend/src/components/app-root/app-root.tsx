import { Component, h } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="p-login" exact={true} />
              <stencil-route url="/register" component="p-register" />
              <stencil-route url="/login" component="p-register" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
