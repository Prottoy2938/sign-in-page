import React, { createContext, useState } from "react";
export const LanguageContext = createContext();
export function LanguageProvider(props) {
  const [language, setlanguage] = useState("english");

  const changeLanguage = e => setlanguage(e.target.value);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
}
