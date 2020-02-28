export const utils = {
  registerUser: async (FirstName, LastName, Email, Password) => {
    let payload = {
      First_Name: FirstName,
      Last_Name: LastName,
      Email: Email,
      Password: Password
    };
    let url = "http://localhost:5000/user/register";
    let options = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    };

    await fetch(url, options)
      .then(res => res.json())
      .then(data => {
        if (data.status === "success") {
          return true;
        } else if (data.status === "failed") {
          return false;
        }
      })
      .catch(error => {
        console.log(error);
      });
  },

  loginUser: async (Email, Password) => {
    let payload = { Email: Email, Password: Password };
    let url = "http://localhost:5000/user/login";
    let options = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    };
    await fetch(url, options)
      .then(res => res.json())
      .then(data => {
        if (data.status === "success") {
          return true;
        } else if (data.status === "failed") {
          return false;
        }
      })
      .catch(error => {
        console.log(error);
      });
  },

  test: () => {
    console.log("import successful");
  }
};
