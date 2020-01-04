import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default function PageContent(props) {
  console.log(
    "Enter icon icon by Icons8",
    "https://icons8.com/icons/set/enter-2"
  );

  const { isDarkMode } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkMode ? "black" : "white",
    height: "100vh",
    width: "100vw"
  };
  return <div style={styles}>{props.children}</div>;
}
