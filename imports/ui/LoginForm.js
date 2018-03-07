import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

class LoginForm extends Component {
  login = e => {
    e.preventDefault();

    Meteor.loginWithPassword(this.email.value, this.password.value, err => {
      if (!err) {
        this.props.client.resetStore();
        return;
      }
      console.log(err);
    });
  };

  render() {
    return (
      <form onSubmit={this.login}>
        <input
          type="email"
          placeholder="Email"
          ref={input => (this.email = input)}
        />
        <input
          type="password"
          placeholder="Password"
          ref={input => (this.password = input)}
        />
        <button type="Submit">Login User</button>
      </form>
    );
  }
}

export default LoginForm;
