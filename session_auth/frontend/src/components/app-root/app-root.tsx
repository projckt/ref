import { Component, h } from "@stencil/core";
import { isUserLogged } from "../../utils/";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true
})
export class AppRoot {
  componentWillLoad() {
    isUserLogged();
  }
  render() {
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" component="p-home" exact={true} />
          <ProtectedRoute url="/register" component="p-register" />
          <ProtectedRoute url="/login" component="p-login" />
          <PrivateRoute url="/dashboard" component="p-dashboard" />
          <PrivateRoute url="/settings" component="p-settings" />
          <stencil-route component="p-catchall" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}

const PrivateRoute = ({ component, ...props }: { [key: string]: any }) => {
  const Component = component;
  return (
    <stencil-route
      {...props}
      routeRender={() => {
        if (isUserLogged()) {
          return <Component {...props} {...props.componentProps}></Component>;
        }
        return <stencil-router-redirect url="/"></stencil-router-redirect>;
      }}
    />
  );
};

const ProtectedRoute = ({ component, ...props }: { [key: string]: any }) => {
  const Component = component;
  return (
    <stencil-route
      {...props}
      routeRender={() => {
        if (isUserLogged()) {
          return <Component {...props} {...props.componentProps}></Component>;
        }
        return (
          <stencil-router-redirect url="/dashboard"></stencil-router-redirect>
        );
      }}
    />
  );
};
