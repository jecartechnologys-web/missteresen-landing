# Missteresen — Landing Page

Landing page oficial de **Missteresen**, la plataforma de gestión educativa con inteligencia artificial para docentes, tutores y terapeutas.

🔗 **Producción:** https://mi-gg4mnoaje-jecartechnologys-webs-projects.vercel.app

## Stack

- **Next.js 16** con App Router y TurboPack
- **React 19** con server components
- **Tailwind CSS 4** con diseño responsive
- **SASS** para estilos globales

## Funcionalidades

- Landing page one-page con secciones: Hero, Features, Skills, Contacto
- Formulario de contacto con notificaciones Telegram
- SEO optimizado (metadata, OG tags, sitemap, robots.txt)
- Security headers (CSP, XSS, X-Frame-Options)
- JSON-LD structured data
- Sitemap automático
- Deploy en Vercel con CI/CD desde GitHub

## Desarrollo

```bash
npm install
npm run dev      # localhost:3000
npm run build    # build de producción
npm start        # producción local
```

## Variables de entorno (.env)

```
NEXT_PUBLIC_APP_URL = http://localhost:3000
TELEGRAM_BOT_TOKEN = tu_token
TELEGRAM_CHAT_ID = tu_chat_id
```

## Deploy

Push a `main` → Vercel deploya automáticamente.

## Missteresen App

La landing page es para la app **Missteresen** (Flutter + Firebase).  
Repo: https://github.com/jecartechnologys/misteresen
