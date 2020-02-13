import { Component, Prop, h } from "@stencil/core";
import { RouterHistory, injectHistory } from "@stencil/router";

@Component({
  tag: "c-logout-btn",
  styleUrl: "c-logout-btn.css"
})
export class CLogoutBtn {
  @Prop() history: RouterHistory;

  handleLogout(event) {
    event.preventDefault();
    let url = "http://localhost:1945/logout";
    let options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    };
    fetch(url, options)
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (data.status === "success") this.history.replace("/");
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <button onClick={(event: UIEvent) => this.handleLogout(event)}>
        Logout
      </button>
    );
  }
}

injectHistory(CLogoutBtn);
