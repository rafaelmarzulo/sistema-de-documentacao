import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
  titleKey: string;
}

export default function Header({ titleKey }: HeaderProps) {
  const { t } = useTranslation();

  return (
    <header className="flex justify-between items-center mb-4 border-b pb-2">
      <h1 className="text-2xl font-bold">{t(titleKey)}</h1>
      <LanguageSwitcher />
    </header>
  );
}