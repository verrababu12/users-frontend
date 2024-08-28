import { Component } from "react";

import { Link } from "react-router-dom";

import "./index.css";

class Register extends Component {
  state = {
    username: "",
    name: "",
    email: "",
    password: "",
  };

  onSubmitSuccess = () => {
    const { history } = this.props;
    history.replace("/login");
  };

  submitForm = async (event) => {
    event.preventDefault();
    const { username, name, email, password } = this.state;
    const userDetails = { username, name, email, password };
    const url = "https://users-api-sandy-phi.vercel.app/register";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
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

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  renderPasswordField = () => {
    const { password } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="password">
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
        <label className="input-label" htmlFor="username">
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

  renderNameField = () => {
    const { name } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="name">
          NAME
        </label>
        <input
          type="text"
          id="name"
          className="input-filed"
          value={name}
          onChange={this.onChangeName}
        />
      </>
    );
  };

  renderEmailField = () => {
    const { email } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="email">
          EMAIL
        </label>
        <input
          type="text"
          id="email"
          className="input-filed"
          value={email}
          onChange={this.onChangeEmail}
        />
      </>
    );
  };

  render() {
    return (
      <div className="login-form-container">
        <form className="login-card" onSubmit={this.submitForm}>
          <h1 className="main-heading">SignUp Form</h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <br />
          <div className="input-container">{this.renderNameField()}</div>
          <br />
          <div className="input-container">{this.renderEmailField()}</div>
          <br />
          <div className="input-container">{this.renderPasswordField()}</div>
          <br />
          <button type="submit" className="form-button">
            SIGN UP
          </button>
          <p className="paragraph">Already you have an account??</p>
          <Link to="/login">
            <button type="button" className="sign-in-button">
              SIGN IN
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Register;
