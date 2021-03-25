import React, { useState } from "react";

export const UserForm = ({ setPerson }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSubmit = (e) => {
    setPerson({ firstName, lastName });
    e.preventDefault()
  };
  return (
    <div className="card-body">
      <div className="card-header">Input</div>
      <form className="form">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="First Name:"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Last Name:"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
