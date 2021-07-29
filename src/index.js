import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useScroll = () => {
  const [state,setState] = useState({
    x: 0,
    y: 0
  });
  const onScroll = () => {
    setState({y: window.scrollY, x: window.scrollX});
  };
  useEffect(() => {
      window.addEventListener("scroll",onScroll);
      return () => window.removeEventListener("scroll",onScroll);
  },[]);
  return state;
}

const App = () => {
  const {y} = useScroll();
  return (
    <div className="App" style={{height: "1000vh"}}>
      <h1 style={{positon: "fixed", color: y > 10 ? "red" : "blue" }}>Bye</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
