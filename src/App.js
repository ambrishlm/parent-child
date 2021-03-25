import React, { useState } from "react";
import "./App.css";
import { UserForm } from "./UserForm";
import { UserDetails } from "./UserDetails";

function App() {
  const [person, setPerson] = useState({});
  return (
    <div className="App">
      <div className="row">
        <div className="col-6">
          <UserForm setPerson={setPerson} />
        </div>
        <div className="col-6">
          <UserDetails {...person} />
        </div>
      </div>
    </div>
  );
}

export default App;
