import { Component, h } from "@stencil/core";
import { check } from "../../global/utils";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true
})
export class AppRoot {
  componentWillLoad() {
    check.cookie.isLogged();
  }
  render() {
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" component="p-home" exact={true} />
          <stencil-route url="/register" component="p-register" />
          <stencil-route url="/login" component="p-login" />
          <PrivateRoute url="/dashboard" component="p-dashboard" />
          <stencil-route component="p-catchall" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}

const PrivateRoute = ({ component, ...props }: { [key: string]: any }) => {
  const Component = component;
  const redirectUrl = props.failureRedirect || "/login";
  return (
    <stencil-route
      {...props}
      routeRender={() => {
        // if (auth.isAuthenticated) {
        //   return <Component {...props} {...props.componentProps}></Component>;
        // }
        // return <stencil-router-redirect url="/login"></stencil-router-redirect>;
        // return <Component {...props} {...props.componentProps}></Component>;
      }}
    />
  );
};
