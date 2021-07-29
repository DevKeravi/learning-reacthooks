import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useClick = (onClick) => {
  const ref = useRef();
  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener("click", onClick);
    }
    // useEffect 사용시 return으로 함수를 주면 componentWillUnMount때 실행된다.
    return () => {
      if (element) {
        element.removeEventListener("clcik", onClick);
      }
    };
  }, [onClick]);
  return ref.current;
};

const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
