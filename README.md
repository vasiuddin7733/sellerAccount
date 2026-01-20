## sellerAccount (Monorepo)

Monorepo with:
- **Frontend**: Vite + React (`apps/frontend`)
- **Backend**: NestJS (`apps/backend`)

### Local dev

Install deps (root):

```bash
cd /home/vasiuddin/Projects/Humachine/sellerAccount
npm run install:all
```

Run backend (Nest):

```bash
npm run dev:backend
```

Run frontend (Vite):

```bash
npm run dev:frontend
```

### Hosting

- **GitHub Pages** can host the **frontend only** (static files).
- The **NestJS backend cannot run on GitHub Pages** (it needs a server). Host it for free on Render/Fly.io/Railway (free tiers vary), then point the frontend to that URL via `VITE_API_URL`.

