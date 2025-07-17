import React from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";

export default function Documentation() {
  const { t } = useTranslation();

  return (
    <div className="p-4">
      <Header />
      <h1 className="text-2xl font-bold mb-4">{t("documentation")}</h1>
      <p>{t("documentation")} principal do projeto.</p>
    </div>
  );
}