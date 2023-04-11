import React, {useAsync, useState, useEffect, useRef} from "react";
import SimpleGet from "./components/SimpleGet";
import SimplePost from "./components/SimplePost";
import './App.css';

function App() {
  
  const [data, setData] = useState(null);
  const areaName = useRef();
  const [showDemo1, setShowDemo1] = useState(false);
  const [showDemo2, setShowDemo2] = useState(false);
  
  const handleClick1 = () => {
    setShowDemo1(true);
  }
  const handleClick2 = () => {
    setShowDemo2(true);
  }

  return (
    <div id="main-div">
      <h1>{!data ? "Loading..." : data}</h1>
      <button onClick={handleClick1}>Only retrieve</button>
      {showDemo1 && <SimpleGet url="/simpleGet"/>}
      <button onClick={handleClick2}>Send an retrieve</button>
      {showDemo2 && <SimplePost url="/simplePost"/>}
      <textarea ref={areaName} />
    </div>    
  );
}

export default App;
