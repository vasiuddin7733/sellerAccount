# 🛒 SellerAccount - E-commerce Platform

A full-stack e-commerce application built with **Vite + React** (frontend) and **NestJS** (backend) for buying and selling products online.

## 🚀 Features

- **Browse Products**: View all available products with details
- **Sell Products**: List your products for sale
- **Product Management**: Full CRUD operations for products
- **Modern UI**: Beautiful and responsive design
- **Free Hosting**: Frontend deployed on GitHub Pages

## 📁 Project Structure

```
sellerAccount/
├── apps/
│   ├── frontend/          # Vite + React frontend
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   └── types/
│   │   └── vite.config.ts
│   └── backend/           # NestJS backend
│       └── src/
│           ├── products/
│           └── main.ts
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Pages deployment
└── package.json
```

## 🛠️ Tech Stack

- **Frontend**: Vite 7, React 19, TypeScript
- **Backend**: NestJS 11, TypeScript, Express
- **Deployment**: GitHub Actions + GitHub Pages

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd sellerAccount
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create `apps/frontend/.env`:
   ```env
   VITE_API_URL=http://localhost:3000/api
   ```

   For production (GitHub Pages), set `VITE_API_URL` in GitHub Secrets.

## 🏃 Running Locally

### Start Backend Server
```bash
npm run dev:backend
```
Backend runs on `http://localhost:3000`

### Start Frontend
```bash
npm run dev:frontend
```
Frontend runs on `http://localhost:5173`

## 🚀 Deployment to GitHub Pages

### Step 1: Push to GitHub

1. **Initialize git repository** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a new repository on GitHub** and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/sellerAccount.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### Step 3: Configure Backend API URL (Optional)

If you have a backend deployed elsewhere:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add a new secret: `VITE_API_URL` with your backend API URL
3. The workflow will use this for builds

### Step 4: Deploy

The deployment happens automatically when you push to `main` branch. You can also trigger it manually:

1. Go to **Actions** tab
2. Select **Deploy Frontend to GitHub Pages**
3. Click **Run workflow**

Your site will be available at:
```
https://YOUR_USERNAME.github.io/sellerAccount/
```

## 📝 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

## 🔧 Development Scripts

- `npm run dev:frontend` - Start frontend dev server
- `npm run dev:backend` - Start backend dev server
- `npm run build:frontend` - Build frontend for production
- `npm run build:backend` - Build backend for production
- `npm run install:all` - Install all workspace dependencies

## 🌐 Backend Hosting Options

GitHub Pages only hosts static files. For the backend, consider these free hosting options:

- **Render** (https://render.com) - Free tier available
- **Railway** (https://railway.app) - Free tier available
- **Fly.io** (https://fly.io) - Free tier available
- **Vercel** (https://vercel.com) - Free tier for serverless

After deploying the backend, update the `VITE_API_URL` in GitHub Secrets.

## 📄 License

MIT

## 👨‍💻 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
