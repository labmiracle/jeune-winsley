import React, { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";

const SSwitchLanguage = () => {
  const { spanish, english, currentLanguage, updateLanguage } = useContext(LanguageContext);

  const handleClick = () => {
    const newLanguage = currentLanguage === "english" ? "spanish" : "english";
    updateLanguage(newLanguage);
  };

  const buttonLabel = currentLanguage === "english" ? english.title : spanish.title;

  return (
    <div>
      <button type="button" onClick={handleClick}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default SSwitchLanguage;
