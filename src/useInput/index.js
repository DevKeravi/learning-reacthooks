import { useInput } from "./useInput";
import React, { useState } from "react";
import ReactDOM from "react-dom";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setValue(value);
  };
  let willUpdate = false;
  if (typeof validator === "function") {
    willUpdate = validator(value);
  }
  if (willUpdate) {
    setValue(value);
  }

  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.length < 10;
  const name = useInput("Mr.", maxLen);

  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

const rootElement = document.getElmentbyId("root");
ReactDOM.render(<App />, rootElement);
