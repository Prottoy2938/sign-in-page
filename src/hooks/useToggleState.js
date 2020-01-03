import { useState } from "react";
export default (initialState = false) => {
  const [state, setstate] = useState(initialState);
  const toggle = () => {
    setstate(!state);
  };
  return [state, toggle];
};
