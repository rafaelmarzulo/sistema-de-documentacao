import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState<string>("");
  const { t } = useTranslation();

  return (
    <div className="p-4">
      <Header />
      <h1 className="text-2xl font-bold mb-4">{t("markdown_editor")}</h1>
      <textarea
        className="w-full h-48 p-2 border rounded mb-4"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder={t("type_here")}
      />
      <div className="prose">
        <h2>{t("preview")}:</h2>
        <pre>{markdown}</pre>
      </div>
    </div>
  );
}