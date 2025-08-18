# Changelog

All notable changes to this project will be documented in this file.

## [development] - 2024-12-19

### Added
- **GitHub Actions CI/CD Pipeline**: Automated deployment to GitHub Pages
  - Automatic builds on push to main/master branch
  - Pull request builds for testing
  - Manual workflow dispatch option
  - Optimized npm caching for faster builds
  - Concurrent deployment protection

### Changed
- **Astro Configuration**: Configured for custom domain `flowstatelabs.ai`
- **Base Path**: Changed from `/summit-craft-website` to `/` for root domain
- **Package Scripts**: Enhanced deploy scripts with custom domain deployment

### Infrastructure
- **GitHub Pages Integration**: Full CI/CD pipeline with GitHub Actions
- **Build Optimization**: Node.js 18 with npm caching
- **Deployment Security**: Minimal required permissions, secure token handling
- **Static Site Generation**: Optimized for GitHub Pages hosting

### Documentation
- **Deployment Guide**: Comprehensive setup and troubleshooting documentation
- **Workflow Configuration**: Detailed explanation of GitHub Actions setup
- **Troubleshooting**: Common issues and solutions for deployment problems

### Technical Details
- **Workflow File**: `.github/workflows/deploy.yml`
- **Build Output**: `dist/` folder optimized for static hosting
- **Base Path**: Configured for root domain (`/`)
- **Custom Domain**: `flowstatelabs.ai` with CNAME configuration
- **Jekyll Disabled**: `.nojekyll` file prevents GitHub Pages Jekyll processing

### Next Steps
1. Enable GitHub Pages in repository settings
2. Update `site` URL in `astro.config.mjs` with your username
3. Push to main branch to trigger first deployment
4. Monitor deployment in GitHub Actions tab
