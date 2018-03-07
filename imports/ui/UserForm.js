import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

export default class UserForm extends Component {
  state = {
    login: true
  };

  render() {
    const { currentUser, client } = this.props;
    const { login } = this.state;
    return (
      <div>
        {currentUser._id ? (
          <button
            onClick={() => {
              Meteor.logout();
              client.resetStore();
            }}
          >
            Logout
          </button>
        ) : (
          <div>
            {login ? (
              <LoginForm client={client} />
            ) : (
              <RegisterForm client={client} />
            )}
            <button onClick={() => this.setState({ login: !login })}>
              {login ? 'Register' : 'Login'}
            </button>
          </div>
        )}
      </div>
    );
  }
}
