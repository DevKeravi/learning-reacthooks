import { useState } from "react";
export const useInput = (initialValue, vaildator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = false;
    if (typeof vaildator === "function") {
      willUpdate = vaildator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};
