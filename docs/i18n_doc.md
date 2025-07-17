# 🌍 Documentação Técnica - Internacionalização (i18n)

Este projeto utiliza a biblioteca `react-i18next` para suporte a múltiplos idiomas.

## 📦 Estrutura de arquivos de tradução

As traduções estão localizadas em:

```
public/locales/
├── en/
│   └── translation.json
└── pt-br/
    └── translation.json
```

## ⚙️ Configuração

O arquivo `src/i18n.ts` configura:

- Detecção automática de idioma (navegador, localStorage, etc.)
- Carregamento dos arquivos JSON
- Idiomas suportados: `en`, `pt-br`

## 🧠 Como traduzir um componente

### 1. Importe o hook:

```tsx
import { useTranslation } from "react-i18next";
```

### 2. Use a função `t`:

```tsx
const { t } = useTranslation();
<h1>{t("dashboard")}</h1>
```

## ➕ Como adicionar novas traduções

1. Edite os arquivos `translation.json` em `en/` e `pt-br/`
2. Adicione uma nova chave:

**pt-br/translation.json**
```json
{
  "new_key": "Nova tradução"
}
```

**en/translation.json**
```json
{
  "new_key": "New translation"
}
```

## 🌐 Como mudar o idioma manualmente

Use o hook `i18n.changeLanguage()`:

```tsx
const { i18n } = useTranslation();
i18n.changeLanguage('pt-br');
```

## 📌 Componente de troca de idioma

Veja `src/components/LanguageSwitcher.tsx`