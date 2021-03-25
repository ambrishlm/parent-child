import React from "react";

const handleSubmit = e => {
  console.log("Submit clicked");
};

export const Parent = () => {
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
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Last Name:"
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

