import React from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";

export default function Dashboard() {
  const { t } = useTranslation();

  return (
    <div className="p-4">
      <Header />
      <h1 className="text-2xl font-bold mb-4">{t("dashboard")}</h1>
      <p>{t("dashboard")} {t("preview").toLowerCase()}.</p>
    </div>
  );
}