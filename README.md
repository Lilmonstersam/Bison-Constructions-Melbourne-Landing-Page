<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# React Landing Page 

This repository contains the source code for a polished React-based landing page, originally generated via AI Studio.

## 🚀 Getting Started

### Prerequisites
- Node.js (v20+ recommended)

### Local Development
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Environment Variables:**
   Copy `.env.example` to `.env.local` (or just `.env`) and provide your API keys if needed (e.g., `GEMINI_API_KEY`).
   ```bash
   cp .env.example .env
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
   This will start Vite and output the local URL (usually `http://localhost:3000`).

## 🛠️ Build and Deploy

### Local Build
Ensure everything compiles properly before pushing changes:
```bash
npm run build
npm run preview
```

### GitHub Actions Deployment
This project is configured with a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys the `main` branch to **GitHub Pages**.

To enable this:
1. Go to your repository **Settings** > **Pages**.
2. Under "Build and deployment", change the **Source** to **GitHub Actions**.
3. Push changes to the `main` branch, and the workflow will securely build and publish your project without pushing any messy `.gitignore` artifacts.

## 🔒 Security & Best Practices
- **Strict `.gitignore`**: Implemented an extensive `.gitignore` so sensitive files (like `.env`), cache/logs (`npm-debug.log`, `node_modules/`), and editor configuration folders (`.idea`, `.vscode/`) are intentionally excluded.
- **Dependencies verification**: Ensured `package.json` installs are reliable and the startup workflow is properly configured.
