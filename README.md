# Summit Craft - AI Solutions Agency Website

A modern, performance-optimized website built with Astro and Tailwind CSS for Summit Craft, an AI solutions agency specializing in custom AI copilots, chatbots, and automation workflows.

## 🚀 Features

### Core Pages
- **Homepage** - Hero section, services overview, social proof, and process explanation
- **Services** - Detailed breakdown of AI solutions with pricing and ROI calculators
- **Case Studies** - Client success stories with measurable results
- **About** - Company story, team credentials, and mission
- **Blog** - AI insights and thought leadership content
- **Contact** - Lead capture form and consultation booking

### Design System
- **Brand Colors**: Deep Navy (#1E3A8A), Mountain Green (#10B981), Bright Orange (#F59E0B)
- **Typography**: Inter for body text, Poppins for headings
- **Components**: Responsive cards, buttons, forms, and navigation
- **Animations**: Smooth transitions and hover effects

### Technical Features
- **Performance**: Astro for static site generation and optimal loading
- **Responsive**: Mobile-first design with Tailwind CSS
- **SEO**: Meta tags, structured data, and semantic HTML
- **Accessibility**: ARIA labels, focus states, and semantic markup

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Language**: TypeScript for type safety
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd summit-craft-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 🚀 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check TypeScript
npm run type-check

# Lint code
npm run lint
```

## 📁 Project Structure

```
summit-craft-website/
├── public/                 # Static assets
│   └── favicon.svg        # Site favicon
├── src/
│   ├── layouts/           # Page layouts
│   │   └── Layout.astro   # Main layout component
│   ├── pages/             # Page components
│   │   ├── index.astro    # Homepage
│   │   ├── services.astro # Services page
│   │   ├── about.astro    # About page
│   │   ├── case-studies.astro # Case studies
│   │   ├── blog.astro     # Blog page
│   │   └── contact.astro  # Contact page
│   └── styles/            # Global styles
│       └── global.css     # Tailwind imports and custom CSS
├── tailwind.config.mjs    # Tailwind configuration
├── astro.config.mjs       # Astro configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Colors
Update the color palette in `tailwind.config.mjs`:
```javascript
colors: {
  primary: {
    800: '#1E3A8A', // Deep Navy
    // ... other shades
  },
  secondary: {
    500: '#10B981', // Mountain Green
    // ... other shades
  },
  accent: {
    400: '#F59E0B', // Bright Orange
    // ... other shades
  }
}
```

### Content
- **Services**: Update pricing and descriptions in `src/pages/services.astro`
- **Case Studies**: Add new success stories in `src/pages/case-studies.astro`
- **Team**: Update team information in `src/pages/about.astro`
- **Blog**: Add new articles in `src/pages/blog.astro`

### Layout
Modify the main layout in `src/layouts/Layout.astro` to:
- Update navigation links
- Change footer content
- Modify meta tags and SEO settings

## 📱 Responsive Design

The website is built with a mobile-first approach:
- **Mobile**: Single column layouts, stacked navigation
- **Tablet**: Two-column grids, expanded navigation
- **Desktop**: Multi-column layouts, full navigation

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Astro and build the site
3. Deploy with zero configuration

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Manual Deployment
1. Build the project: `npm run build`
2. Upload the `dist/` folder to your web server

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Minimal JavaScript, optimized CSS
- **Loading Speed**: Sub-3 second page loads

## 🔧 Configuration Files

### Tailwind CSS (`tailwind.config.mjs`)
- Custom color palette
- Typography settings
- Animation configurations
- Responsive breakpoints

### Astro (`astro.config.mjs`)
- Build settings
- Integration configurations
- Development server options

## 📈 SEO Features

- **Meta Tags**: Title, description, and Open Graph tags
- **Structured Data**: Schema.org markup for organization
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Performance**: Fast loading times for better rankings

## 🎯 Business Features

### Lead Generation
- Contact forms with service selection
- Newsletter subscription
- Strategy call booking
- Case study downloads

### Conversion Optimization
- Clear value propositions
- Social proof and testimonials
- Multiple call-to-action buttons
- Service-specific landing pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Summit Craft. All rights reserved.

## 🆘 Support

For technical support or questions about the website:
- **Email**: hello@summitcraft.ai
- **Documentation**: [Astro Docs](https://docs.astro.build/)
- **Tailwind CSS**: [Tailwind Docs](https://tailwindcss.com/docs)

## 🔮 Future Enhancements

- **CMS Integration**: Content management for blog and case studies
- **Analytics**: Google Analytics 4 and conversion tracking
- **A/B Testing**: Optimizely or similar for conversion optimization
- **Chat Integration**: Live chat widget for customer support
- **Multi-language**: Internationalization support
- **Dark Mode**: User preference toggle
- **Progressive Web App**: Offline functionality and app-like experience

---

**Built with ❤️ by Summit Craft Team**
