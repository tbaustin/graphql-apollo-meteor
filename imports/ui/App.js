import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withApollo } from 'react-apollo';

import ResolutionForm from './ResolutionForm';
import GoalForm from './GoalForm';
import Goal from './resolutions/Goal';
import UserForm from './UserForm';

const App = ({ loading, resolutions, client, currentUser }) => {
  if (loading) return null;
  return (
    <div>
      <UserForm currentUser={currentUser} client={client} />
      {currentUser._id && (
        <div>
          <ResolutionForm />
          <ul>
            {resolutions.map(resolution => (
              <li key={resolution._id}>
                <span
                  style={{
                    textDecoration: resolution.completed
                      ? 'line-through'
                      : 'none'
                  }}
                >
                  {resolution.name}
                </span>
                <ul>
                  {resolution.goals.map(goal => (
                    <Goal goal={goal} key={goal._id} />
                  ))}
                </ul>
                <GoalForm resolutionId={resolution._id} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const resolutionsQuery = gql`
  query Resolutions {
    resolutions {
      _id
      name
      completed
      goals {
        _id
        name
        completed
      }
    }
    currentUser {
      _id
    }
  }
`;

export default graphql(resolutionsQuery, {
  props: ({ data }) => ({ ...data })
})(withApollo(App));
