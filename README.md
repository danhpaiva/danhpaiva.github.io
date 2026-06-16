<div align="center">

# danhpaiva.github.io

**Currículo web pessoal — Daniel Paiva**
Engenheiro de Software .NET | Sistemas Distribuídos | Cloud | Microserviços

[![Deploy](https://github.com/danhpaiva/danhpaiva.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/danhpaiva/danhpaiva.github.io/actions/workflows/deploy.yml)
[![Lighthouse CI](https://github.com/danhpaiva/danhpaiva.github.io/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/danhpaiva/danhpaiva.github.io/actions/workflows/lighthouse.yml)
[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-22863a?logo=github)](https://danhpaiva.github.io)
[![Node](https://img.shields.io/badge/Node.js-22.x-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![License](https://img.shields.io/badge/license-MIT-blue)](#license)

[🌐 Ver online](https://danhpaiva.github.io) · [💼 LinkedIn](https://linkedin.com/in/danhpaiva) · [💬 Telegram](https://t.me/danhpaiva)

</div>

---

## Sobre o projeto

Currículo web estático construído com **Astro 5**, design **dark tech** responsivo e otimizado para SEO. O deploy é totalmente automatizado via **GitHub Actions** para o GitHub Pages a cada push nas branches `main` e `develop`.

### Funcionalidades

- **Hero animado** com efeito de digitação rotativa e fundo em grid
- **Seções completas**: Sobre, Experiência (timeline), Skills (barras animadas), Educação e Contato
- **Reveal on scroll** via Intersection Observer
- **Nav fixa** com efeito blur, menu mobile responsivo e scroll suave
- **SEO completo**: meta tags, Open Graph, Twitter Card e Schema.org `Person`
- **Zero frameworks CSS** — estilização com custom properties nativas
- **Performance**: output estático, fontes otimizadas, zero JS desnecessário

---

## Stack

| Tecnologia | Uso |
|---|---|
| [Astro 5](https://astro.build) | Framework — output 100% estático |
| CSS Custom Properties | Estilização sem frameworks |
| Google Fonts (Inter + JetBrains Mono) | Tipografia |
| GitHub Actions | CI/CD + Lighthouse CI automatizados |
| GitHub Pages | Hospedagem |
| `@astrojs/sitemap` | Sitemap gerado automaticamente |
| Lighthouse CI (`treosh/lighthouse-ci-action`) | Auditoria de performance e acessibilidade |

---

## Começando

### Pré-requisitos

- Node.js 22+
- npm 10+

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/danhpaiva/danhpaiva.github.io.git
cd danhpaiva.github.io

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
# → http://localhost:4321
```

### Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor local com hot-reload |
| `npm run build` | Gera o build estático em `dist/` |
| `npm run preview` | Prévia local do build gerado |

---

## Estrutura do projeto

```
danhpaiva.github.io/
├── .github/
│   └── workflows/
│       ├── deploy.yml          # CI/CD — build + deploy no GitHub Pages
│       └── lighthouse.yml      # Lighthouse CI — auditoria de qualidade
├── public/
│   ├── favicon.svg
│   └── photo.jpg               # Foto de perfil
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Experience.astro
│   │   ├── Skills.astro
│   │   ├── Education.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro        # Layout base com SEO
│   ├── pages/
│   │   └── index.astro         # Página principal
│   └── styles/
│       └── global.css          # Design system (variáveis, utilitários)
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## Deploy

O deploy é automático via GitHub Actions ao fazer push nas branches `main` ou `develop`.

**Configuração inicial (apenas uma vez):**

1. Acesse **Settings → Pages** no repositório
2. Em *Source*, selecione **GitHub Actions**
3. Faça push — o workflow cuida do build e publicação

O site ficará disponível em `https://danhpaiva.github.io` em aproximadamente 1 minuto.

---

## Foto de perfil

Substitua `public/photo.jpg` pela sua foto. Caso o arquivo não exista, o Hero exibe as iniciais **DP** automaticamente.

---

## License

Distribuído sob a licença [MIT](LICENSE).
