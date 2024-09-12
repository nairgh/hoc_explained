import React from "react";

// Higher-Order Component to add user data
const withUser = (WrappedComponent) => {
  // Define the HOC
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: { name: "John Doe", email: "john@example.com" },
      };
    }

    render() {
      // Pass down additional props to the WrappedComponent
      return <WrappedComponent {...this.props} user={this.state.user} />;
    }
  };
};

export default withUser;
