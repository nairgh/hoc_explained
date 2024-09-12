import React from 'react'

const WithUser = (WrappedComponent) => {
   return function EnhancedComponent(props) {
    // Define the user data
    const user = { name: 'John Doe', email: 'john@example.com' };
    // Return the WrappedComponent with additional props
    return <WrappedComponent {...props} user={user} />;
  };
}

export default WithUser