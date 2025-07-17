# 🚀 Sistema de Documentação

A modern React + Vite application built to help university students organize, write, and publish content in Markdown format.

---

## 🌟 Features

- ✍️ Live Markdown Editor
- 📚 Documentation Viewer
- 📊 Dashboard Panel
- 🌍 Multilanguage Support (i18n) - English 🇺🇸 and Portuguese 🇧🇷
- 🔄 Language Switcher Component
- 🧱 Reusable Header Component with dynamic titles
- 📦 Ready for Deployment on Vercel or Netlify
- 🧾 Technical Documentation in `docs/i18n_doc.md`

---

## 🧪 Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [react-i18next](https://react.i18next.com/) for internationalization

---

## 🌐 Language Support (i18n)

The app uses `react-i18next` to support multiple languages.

- Default: English (`en`)
- Additional: Brazilian Portuguese (`pt-br`)
- Language is auto-detected and can be changed manually via UI.

Translations are located in:

```
public/locales/en/translation.json
public/locales/pt-br/translation.json
```

---

## 🧭 Project Structure (src/)

```
components/
├── Header.tsx             # Dynamic title + language switcher
├── LanguageSwitcher.tsx   # Language toggle (EN/PT)
├── Dashboard.tsx
├── Documentation.tsx
├── MarkdownEditor.tsx

i18n.ts                    # i18next config
main.tsx                   # App entry point with i18n
App.tsx                    # Routes
```

---

## 🖥️ Local Development

```bash
git clone <repo-url>
cd sistema-de-documentacao
npm install
npm run dev
```

---

## ☁️ Deployment

### ➤ Vercel

1. Go to https://vercel.com/import
2. Connect your Git repository
3. It will auto-detect Vite
4. Deploy 🎉

> Includes `vercel.json` for SPA routing

### ➤ Netlify

1. Go to https://app.netlify.com/start
2. Connect your Git repository
3. Build Command: `npm run build`
4. Publish Directory: `dist`

> Includes `netlify.toml`

---

## 📄 Documentation

See `docs/i18n_doc.md` for full i18n usage and instructions.

---

## 📜 License

MIT