import React from "react";
import Profile from "./Profile";
import WithUser from "./WithUser";

const EnhancedProfile = WithUser(Profile);

const HocFunctional = () => {
  return (
    <div>
      <EnhancedProfile />
    </div>
  );
};

export default HocFunctional;
