import React, { Component } from "react";
import Header from './Header';

class LoginContainer extends Component {
  state = {
    email: "",
    password: "",
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
  }

  render() {
    return (
      <div id="LoginContainer" className="inner-container">
        <Header />
        <form onSubmit={this.handleSubmit}>
          <p>Sign or sign up by entering email and password.</p>
          <input
            type="text"
            onChange={this.handleEmailChange}
            value={this.state.email}
            placeholder="Your Email"
          />
          <input
            type="password"
            onChange={this.handlePasswordChange}
            value={this.state.password}
            placeholder="Your Password"
          />
          <button className="red light" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginContainer;
