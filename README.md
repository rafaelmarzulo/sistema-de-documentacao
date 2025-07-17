# 📘 Sistema de Documentação

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://github.com/rafaelmarzulo/sistema-de-documentacao/releases)
![Tech](https://img.shields.io/badge/tech-react--vite--ts-blue)
![Platform](https://img.shields.io/badge/platform-web-lightgrey)

Um sistema web moderno para edição, visualização e organização de documentos Markdown, com suporte multilíngue e estrutura modular.

![Banner do projeto](https://github.com/rafaelmarzulo/sistema-de-documentacao/raw/main/banner.png)


---

## ✨ Funcionalidades

- 📝 Editor Markdown com pré-visualização em tempo real
- 🌍 Suporte a múltiplos idiomas (i18n) – Português e Inglês
- 🧱 Componentes reutilizáveis com cabeçalho e troca de idioma
- 📄 Visualizador de documentação
- ☁️ Deploy simples via Vercel ou Netlify
- 🧪 Testes automatizados com Vitest + Testing Library

---

## 🚀 Tecnologias utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [react-i18next](https://react.i18next.com/)
- [Vitest](https://vitest.dev/)

---

## 🧰 Instalação e uso local

### Pré-requisitos
- Node.js 18+
- npm ou bun

### Passos

```bash
# Clone o repositório
git clone https://github.com/rafaelmarzulo/sistema-de-documentacao.git
cd sistema-de-documentacao

# Instale as dependências
npm install

# Inicie o servidor local
npm run dev
```

Acesse: [http://localhost:5173](http://localhost:5173)

---

## 🧪 Executar os testes

```bash
npm run test
```

---

## 🌐 Publicar em produção

### ✅ Vercel

1. Acesse https://vercel.com/import
2. Conecte o repositório
3. Detecta automaticamente: `vite`
4. Deploy 🎉

### ✅ Netlify

1. Acesse https://app.netlify.com/start
2. Conecte o repositório
3. Comando de build: `npm run build`
4. Pasta de publicação: `dist`

---

## 📂 Estrutura do projeto

```
src/
├── modules/
│   ├── ui/components/        → Componentes reutilizáveis (Header, LanguageSwitcher, etc.)
│   └── pages/                → Páginas principais (Index, NotFound)
├── i18n.ts                   → Configuração de idiomas
├── App.tsx / main.tsx       → Ponto de entrada e roteamento
public/locales/              → Arquivos de tradução (pt-br, en)
```

---

## 📄 Documentação

- `docs/i18n_doc.md`: Guia técnico do sistema de internacionalização
- `docs/presentation.md`: Apresentação visual e conceitual do projeto

---

## 🪪 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.