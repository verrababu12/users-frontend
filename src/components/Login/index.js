import { Component } from "react";

import { Link } from "react-router-dom";

import "./index.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  onSubmitSuccess = () => {
    const { history } = this.props;
    history.replace("/home");
  };

  submitForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    const url = "https://users-api-sandy-phi.vercel.app/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    if (response.ok === true) {
      this.onSubmitSuccess();
    }
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  renderPasswordField = () => {
    const { password } = this.state;
    return (
      <>
        <label className="input-label-2" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="input-filed"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    );
  };

  renderUsernameField = () => {
    const { username } = this.state;
    return (
      <>
        <label className="input-label-2" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    );
  };

  render() {
    return (
      <div className="login-form-container-2">
        <form className="login-card-2" onSubmit={this.submitForm}>
          <h1 className="main-heading-2">Login From</h1>
          <div className="input-container-2">{this.renderUsernameField()}</div>
          <br />
          <div className="input-container-2">{this.renderPasswordField()}</div>
          <button type="submit" className="button">
            Login
          </button>
          <p>Don't have an account?</p>

          <Link to="/">
            <button type="button" className="sign-up-button-2">
              SIGN UP
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
