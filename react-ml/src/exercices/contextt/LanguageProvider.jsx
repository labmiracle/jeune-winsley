import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

const texto = {
  spanish: {
    title: "Español",
    paragraph: "Este en parrafo en español"
  },
  english: {
    title: "English",
    paragraph: "This is an English paragraph."
  }
};

const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("english");

  const updateLanguage = (newLanguage) => {
    setCurrentLanguage(newLanguage);
  };

  const contextValues = {
    currentLanguage,
    updateLanguage,
    ...texto,
  };

  return (
    <LanguageContext.Provider value={contextValues}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
