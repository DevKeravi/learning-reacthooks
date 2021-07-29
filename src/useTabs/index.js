import { useTabs } from "./useTabs/useTabs";
import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

const rootElement = document.getElmentbyId("root");
ReactDOM.render(<App />, rootElement);
