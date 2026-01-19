# GitHub Pages Deployment Guide

Your site is now configured for automatic deployment to GitHub Pages!

## ✅ Configuration Complete

The following files have been configured:

1. **`next.config.ts`** - Enabled static export for GitHub Pages
2. **`.github/workflows/deploy.yml`** - GitHub Actions workflow for automatic deployment
3. **`public/.nojekyll`** - Tells GitHub Pages not to use Jekyll processing
4. **`package.json`** - Added export script

## 🚀 How to Enable GitHub Pages

### Step 1: Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository: https://github.com/princecharming001/anishpolakala
2. Click on **Settings** (top navigation)
3. In the left sidebar, click **Pages**
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - That's it! The workflow will handle the rest

### Step 2: Push Your Changes

The changes are ready to be pushed. Once pushed, the GitHub Actions workflow will:
- Install dependencies
- Build your Next.js site
- Export static files
- Deploy to GitHub Pages

### Step 3: Access Your Site

After the workflow completes (2-3 minutes), your site will be live at:

**https://princecharming001.github.io/anishpolakala/**

## 🔄 Automatic Deployments

From now on, every time you push to the `main` branch:
1. GitHub Actions automatically triggers
2. Your site is rebuilt
3. Changes are deployed to GitHub Pages
4. Site is live within 2-3 minutes

## 🎨 What Changed

### `next.config.ts`
```typescript
output: 'export',        // Enable static HTML export
images: { unoptimized: true },  // Disable image optimization (required for static export)
trailingSlash: true,     // Add trailing slashes to URLs
```

### Static Export
Your Next.js site will be converted to static HTML files:
- No server-side rendering
- No API routes (move to coach page uses `mailto:` which works)
- All pages pre-rendered at build time
- Fast loading, works on any static host

## 🌐 Custom Domain (Optional)

To use a custom domain like `anishpolakala.com`:

1. Buy a domain from any registrar (Namecheap, GoDaddy, etc.)
2. In your GitHub Pages settings, add your custom domain
3. Configure DNS records at your registrar:
   ```
   A record:
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   
   CNAME record (for www):
   princecharming001.github.io
   ```
4. Wait for DNS propagation (24-48 hours)

## 📊 Monitoring Deployments

To check deployment status:
1. Go to your repository on GitHub
2. Click the **Actions** tab
3. You'll see all deployment runs
4. Click any run to see detailed logs

## 🐛 Troubleshooting

### Build Fails
- Check the Actions tab for error logs
- Most common: missing dependencies or build errors
- Fix locally, test with `npm run build`, then push

### Site Doesn't Update
- Wait 2-3 minutes after push
- Check Actions tab to ensure workflow completed
- Clear browser cache (Cmd+Shift+R on Mac)

### 404 Error
- Ensure GitHub Pages source is set to "GitHub Actions"
- Check that .nojekyll file exists in public folder
- Verify workflow completed successfully

## 🔧 Local Testing

Test the production build locally:
```bash
npm run build
npx serve out
```

This simulates what will be deployed to GitHub Pages.

## 📝 Notes

- First deployment takes 3-5 minutes
- Subsequent deployments take 2-3 minutes
- The workflow runs on every push to `main`
- You can see live progress in the Actions tab
- The site is automatically cached by GitHub's CDN

## 🎉 You're All Set!

Just push your changes and GitHub Pages will handle everything automatically!
