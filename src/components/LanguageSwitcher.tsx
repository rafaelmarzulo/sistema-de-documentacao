import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2 mb-4">
      <button onClick={() => changeLanguage('pt-br')} className="px-2 py-1 border rounded">
        🇧🇷 PT
      </button>
      <button onClick={() => changeLanguage('en')} className="px-2 py-1 border rounded">
        🇺🇸 EN
      </button>
    </div>
  );
}