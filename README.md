# Jeffrey Tottimeh - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- **Dark/Light Mode** - Theme toggle with persistent preferences
- **Smooth Animations** - Powered by Framer Motion
- **SEO Optimized** - Meta tags and structured data
- **Accessible** - WCAG compliant design
- **Fast Performance** - Static site generation
- **Modern Stack** - Next.js 14, React 18, TypeScript, Tailwind CSS

## 📄 Pages

1. **Home** - Hero section with animated gradient background and quick stats
2. **About** - Personal bio, leadership philosophy, and achievements timeline
3. **Hatchers Dev Studio** - Company overview, services, and tech stack
4. **ARC Robotics Challenge** - Mission, impact, events, and community
5. **Projects** - Portfolio showcase with category filtering
6. **Contact** - Contact form and social links

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Deployment:** GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TA-wiah/TA-wiah.github.io.git
cd TA-wiah.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build and Deploy

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `out/` directory.

### Deploy to GitHub Pages

The site is automatically deployed to GitHub Pages when you push to the `main` branch. The deployment workflow is configured in `.github/workflows/deploy.yml`.

#### Manual Deployment

1. Build the site:
```bash
npm run build
```

2. The `out/` directory contains the static site ready for deployment.

## 🎨 Customization

### Update Content

Edit the site configuration in `lib/constants.ts`:

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  // ... other settings
}
```

### Modify Theme Colors

Update colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your primary color palette
  },
  secondary: {
    // Your secondary color palette
  },
}
```

### Add New Pages

1. Create a new directory in `app/` (e.g., `app/blog/`)
2. Add a `page.tsx` file in that directory
3. Update navigation links in `components/Navigation.tsx`

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── arc-robotics/      # ARC Robotics page
│   ├── contact/           # Contact page
│   ├── hatchers/          # Hatchers Dev Studio page
│   ├── projects/          # Projects page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navigation.tsx
│   └── ThemeToggle.tsx
├── hooks/                 # Custom React hooks
│   └── useTheme.ts
├── lib/                   # Utilities and constants
│   └── constants.ts
├── public/                # Static assets
│   ├── images/
│   └── assets/
├── .github/workflows/     # GitHub Actions
│   └── deploy.yml
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🌐 Live Demo

Visit the live site: [https://roboticsandcoding.me](https://roboticsandcoding.me)

## 👤 Author

**Jeffrey Tottimeh**
- CEO & Founder of Hatchers Dev Studio
- Founder of ARC Robotics Challenge
- Full Stack Developer & Innovator

### Connect with Me

- **Email:** contact@hatchersdev.studio
- **GitHub:** [@TA-wiah](https://github.com/TA-wiah)
- **LinkedIn:** [Jeffrey Tottimeh](https://gh.linkedin.com/in/jeffrey-tottimeh-135693319)
- **Twitter:** [@tottimehjeffrey](https://twitter.com/tottimehjeffrey)
- **YouTube:** [Channel](https://www.youtube.com/channel/UCZIBw2LZdsXzqNeds22z_Fg)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

## 🐛 Bug Reports & Feature Requests

If you encounter any issues or have suggestions, please [open an issue](https://github.com/TA-wiah/TA-wiah.github.io/issues).

---

**Built with ❤️ by Jeffrey Tottimeh**
