import React , {useState}  from "react"

import './style/App.css'
import Tenzies from "./components/Tenzies";

function App() {
  return (
    <div className="App">
        <div className="Tcontainer">
          <Tenzies />
        </div>
    </div>
  );
}

export default App;
