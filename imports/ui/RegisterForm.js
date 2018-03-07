import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

class RegisterForm extends Component {
  registerUser = e => {
    e.preventDefault();

    Accounts.createUser(
      {
        email: this.email.value,
        password: this.password.value
      },
      err => {
        if (!err) {
          this.props.client.resetStore();
          return;
        }
        console.log(err);
      }
    );
  };

  render() {
    return (
      <form onSubmit={this.registerUser}>
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
        <button type="Submit">Register User</button>
      </form>
    );
  }
}

export default RegisterForm;
