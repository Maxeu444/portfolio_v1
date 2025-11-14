## 📋 Prérequis

- Node.js 18+ et npm
- Git

## 🛠️ Installation

1. **Cloner le repository**
   ```bash
   git clone <votre-repo>
   cd portfolio_v1
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

   Le site sera disponible sur [http://localhost:3000](http://localhost:3000)

## 📦 Build pour production

```bash
npm run build
```

## 🚀 Déploiement sur VPS

### Avec PM2 (recommandé)

```bash
npm install -g pm2
npm run build
pm2 start .next/standalone/server.js --name "portfolio"
pm2 save
pm2 startup
```

## 🔧 Technologies

- Next.js 16, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion
