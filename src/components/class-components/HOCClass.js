import React from "react";
import Profile from "./Profile";
import WithUser from "./WithUser";

// Enhance the Profile component with user data
const EnhancedProfile = WithUser(Profile);

function HOCClass() {
  return (
    <div>
      <EnhancedProfile />
    </div>
  );
}

export default HOCClass;
