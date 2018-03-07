import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createResolution = gql`
  mutation createResolution($name: String!) {
    createResolution(name: $name) {
      _id
    }
  }
`;

class ResolutionForm extends Component {
  state = {
    error: null
  };

  submitForm = () => {
    this.props
      .createResolution({
        variables: {
          name: this.name.value
        }
      })
      .then(() => {
        this.name.value = '';
      })
      .catch(err => {
        this.setState({ error: err.message });
      });
  };

  render() {
    return (
      <div>
        {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
        <input type="text" ref={input => (this.name = input)} />
        <button onClick={this.submitForm}>Submit Resolution</button>
      </div>
    );
  }
}

export default graphql(createResolution, {
  name: 'createResolution',
  options: {
    refetchQueries: ['Resolutions']
  }
})(ResolutionForm);
