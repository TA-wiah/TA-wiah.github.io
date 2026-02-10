# Deployment Guide

## Prerequisites
- GitHub account with Pages enabled
- Node.js 18+ installed locally for development

## Automatic Deployment (Recommended)

The site is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Steps:
1. Merge this PR to the `main` branch
2. GitHub Actions will automatically:
   - Install dependencies
   - Build the Next.js application
   - Deploy to GitHub Pages
3. Your site will be live at https://roboticsandcoding.me (or https://ta-wiah.github.io)

### Enable GitHub Pages:
1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Build and deployment":
   - Source: Select "GitHub Actions"
4. The workflow in `.github/workflows/deploy.yml` will handle the rest

## Manual Deployment

If you prefer to deploy manually:

```bash
# Build the site
npm run build

# The output will be in the `out/` directory
# Upload the contents of `out/` to your hosting provider
```

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3000
```

## Custom Domain

The CNAME file is already configured for `roboticsandcoding.me`. To use a different domain:

1. Update the `CNAME` file with your domain
2. Configure your DNS provider:
   - Add a CNAME record pointing to `ta-wiah.github.io`
   - Or add A records pointing to GitHub Pages IPs
3. Wait for DNS propagation (can take up to 48 hours)

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Clear cache: `rm -rf .next node_modules package-lock.json && npm install`

### Pages Not Deploying
- Ensure GitHub Actions has write permissions
- Check workflow runs in the "Actions" tab
- Verify GitHub Pages is enabled in repository settings

### Custom Domain Not Working
- Verify DNS records are correct
- Check CNAME file contains only the domain (no http://)
- Wait for DNS propagation

## Support

For issues or questions:
- Email: contact@hatchersdev.studio
- GitHub: https://github.com/TA-wiah/TA-wiah.github.io/issues
