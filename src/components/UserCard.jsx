import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="avatar">{user.name.charAt(0).toUpperCase()}</div>
      <h3 className="mb-0">{user.name}</h3>
      <h4 className="mt-0 text-gray-500 text-sm">{user.email}</h4>
    </div>
  );
};

export default UserCard;
