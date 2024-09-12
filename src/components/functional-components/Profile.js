import React from "react";

const Profile = ({ user }) => {
  return (
    <div>
      <h1>Functional Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
