export default {
  Query: {
    currentUser(obj, args, { user }) {
      return user || {};
    }
  },
  User: {
    email: user => user.emails[0].address
  }
};
