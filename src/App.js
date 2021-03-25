import React from 'react';
import "./App.css";
import {Parent} from './Parent';
import {Child} from './Child';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-6">
          <Parent />
        </div>
        <div className="col-6">
          <Child />
        </div>
      </div>
    </div>
  );
}

export default App;
