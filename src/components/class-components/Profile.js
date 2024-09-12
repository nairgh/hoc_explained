// src/Profile.js
import React from "react";

function Profile({ user }) {
  return (
    <div>
      <h1>Class Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;
