# danhpaiva.github.io

Currículo web pessoal construído com [Astro](https://astro.build), hospedado no GitHub Pages.

## 🚀 Setup local

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # gera dist/
npm run preview   # prévia do build
```

## 📸 Foto de perfil

Coloque sua foto em `public/photo.jpg` para ela aparecer no Hero. Se não houver foto, exibe as iniciais **DP** automaticamente.

## 🌐 Deploy (GitHub Pages)

O deploy é automático via GitHub Actions ao fazer push na branch `main`.

Ative o GitHub Pages no repositório:
1. Settings → Pages
2. Source: **GitHub Actions**
3. Faça push — o workflow `.github/workflows/deploy.yml` cuida do resto.

## 🛠 Stack

- [Astro 5](https://astro.build) · zero JS por padrão
- CSS puro com custom properties (sem frameworks)
- Google Fonts: Inter + JetBrains Mono
- GitHub Actions para CI/CD
