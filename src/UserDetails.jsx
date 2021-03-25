import React from "react";

export const UserDetails = ({ firstName, lastName }) => {
  return (
    <div className="card-body">
      <div className="card-header">Output</div>
      <div className="form">
        <p className="label">First Name : {firstName}</p>
        <p className="label">Last Name: {lastName}</p>
      </div>
    </div>
  );
};
