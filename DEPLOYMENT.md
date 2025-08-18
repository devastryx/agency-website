# Deployment Guide - GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Prerequisites

1. **Repository Settings**: Ensure your repository has GitHub Pages enabled
2. **Repository Visibility**: Repository must be public (or you need GitHub Pro for private repos)
3. **Branch Protection**: Main branch should be protected if you want to enforce PR reviews

## Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Click **Save**

### 2. Configure Repository Secrets (Optional)

If you need to customize the deployment, you can add these secrets:

- `NODE_VERSION`: Custom Node.js version (default: 18)
- `BUILD_COMMAND`: Custom build command (default: `npm run build`)

### 3. Configure Custom Domain

**Important**: The site is configured to use the custom domain `flowstatelabs.ai`.

**DNS Configuration Required**:
1. Add a CNAME record in your domain provider:
   - **Name**: `@` (or leave blank for root domain)
   - **Value**: `yourusername.github.io`
   - **TTL**: 3600 (or default)

2. Add a CNAME record for www subdomain:
   - **Name**: `www`
   - **Value**: `yourusername.github.io`
   - **TTL**: 3600 (or default)

**Note**: Replace `yourusername` with your actual GitHub username.

## How It Works

### Workflow Triggers

- **Automatic**: Every push to `main` or `master` branch
- **Manual**: Use "workflow_dispatch" in Actions tab
- **PR**: Builds on pull requests (for testing)

### Build Process

1. **Checkout**: Clones your repository
2. **Node Setup**: Installs Node.js 18 with npm caching
3. **Dependencies**: Runs `npm ci` for clean installs
4. **Build**: Executes `npm run build`
5. **Upload**: Uploads `dist/` folder as artifact
6. **Deploy**: Deploys to GitHub Pages (only on main/master)

### Deployment

- **URL**: `https://flowstatelabs.ai`
- **Branch**: `gh-pages` (automatically managed)
- **Updates**: Automatic after each successful build
- **Custom Domain**: Fully configured with CNAME file

## Troubleshooting

### Common Issues

1. **Build Failures**: Check Actions tab for error logs
2. **404 Errors**: Verify `base` path in `astro.config.mjs`
3. **Styling Issues**: Ensure Tailwind CSS is building correctly
4. **Deployment Delays**: GitHub Pages can take 5-10 minutes to update

### Debug Steps

1. Check GitHub Actions logs in the Actions tab
2. Verify repository settings in Settings → Pages
3. Ensure `dist/` folder contains built files
4. Check browser console for JavaScript errors

### Manual Deployment

If automatic deployment fails:

```bash
# Build locally
npm run build

# Check dist folder
ls -la dist/

# Commit and push
git add .
git commit -m "Manual build"
git push origin main
```

## Performance Optimization

### Build Optimizations

- **Caching**: npm dependencies are cached between builds
- **Concurrency**: Only one deployment runs at a time
- **Artifacts**: Build artifacts are optimized for size

### Site Optimizations

- **Static Generation**: All pages are pre-built
- **Asset Optimization**: Images and CSS are optimized
- **CDN**: GitHub Pages serves from global CDN

## Security

- **Permissions**: Minimal required permissions for deployment
- **Secrets**: No sensitive data exposed in workflow
- **Dependencies**: Uses `npm ci` for reproducible builds

## Monitoring

### GitHub Actions

- Monitor builds in Actions tab
- Set up notifications for failed builds
- Use branch protection rules for quality gates

### GitHub Pages

- Check deployment status in Settings → Pages
- Monitor site performance and uptime
- Review build logs for optimization opportunities

## Next Steps

1. **Testing**: Test the deployment with a small change
2. **Custom Domain**: Add custom domain if needed
3. **Analytics**: Integrate Google Analytics or similar
4. **Performance**: Monitor Core Web Vitals
5. **SEO**: Verify meta tags and sitemap generation
