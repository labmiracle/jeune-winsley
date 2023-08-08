import React, { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";
import SSwitchLanguage from "./SSwitchLanguage";

const MainTex = () => {
  const { spanish, english, currentLanguage } = useContext(LanguageContext);

  const paragraphText = currentLanguage === "english" ? english.paragraph : spanish.paragraph;

  return (
    <div>
      <p>{paragraphText}</p>
      <SSwitchLanguage />
    </div>
  );
};

export default MainTex;
