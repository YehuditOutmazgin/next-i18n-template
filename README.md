# next-i18n-template

A modern, production-ready Next.js template with built-in internationalization (i18n) support. Perfect for building multilingual web applications with React, Next.js, TypeScript, and Tailwind CSS.

## Features

- **Multi-language Support** - Built-in i18n with Hebrew and English (easily extensible)
- **Server-Side Rendering** - Full SSR support with Next.js App Router
- **TypeScript** - Type-safe development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Responsive Design** - Mobile-first approach with responsive components
- **Language Switcher** - Easy language switching with persistent user preference
- **RTL Support** - Full right-to-left language support (Hebrew)
- **SEO Optimized** - Proper meta tags and language alternates for search engines
- **Cookie-based Persistence** - User language preference saved across sessions

## Tech Stack

- [Next.js 15+](https://nextjs.org) - React framework
- [React 19+](https://react.dev) - UI library
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Lucide Icons](https://lucide.dev) - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YehuditOutmazgin/next-i18n-template.git
cd next-i18n-template
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   └── [lang]/              # Dynamic language routes
│       ├── layout.tsx       # Root layout with language support
│       ├── page.tsx         # Home page
│       ├── about/           # About page
│       └── contact/         # Contact page
├── components/
│   ├── home/                # Home page sections
│   ├── layout/              # Layout components (Navbar, Footer, etc.)
│   └── ui/                  # Reusable UI components
├── dictionaries/            # Translation files (JSON)
│   ├── en.json
│   └── he.json
├── lib/
│   ├── i18n.ts             # i18n configuration
│   └── utils.ts            # Utility functions
├── types/
│   └── dictionary.ts       # TypeScript types for translations
└── middleware.ts           # Next.js middleware for language routing
```

## Adding a New Language

1. Create a new translation file in `src/dictionaries/`:
```json
// src/dictionaries/fr.json
{
  "meta": {
    "title": "Bienvenue",
    "description": "Description en français"
  },
  "nav": {
    "home": "Accueil",
    "about": "À propos",
    "contact": "Contact"
  }
  // ... rest of translations
}
```

2. Update `src/lib/i18n.ts`:
```typescript
export const i18n = {
  defaultLocale: 'he',
  locales: ['he', 'en', 'fr'],  // Add 'fr'
} as const;

export const localeNames: Record<Locale, string> = {
  he: 'עברית',
  en: 'English',
  fr: 'Français',  // Add French
};

export const localeDirections: Record<Locale, 'rtl' | 'ltr'> = {
  he: 'rtl',
  en: 'ltr',
  fr: 'ltr',  // Add French
};
```

3. Update `src/dictionaries/index.ts` to import the new dictionary

## How It Works

### Language Routing

- Default language (Hebrew): `/` and `/he`
- English: `/en`
- Language preference is stored in a cookie (`NEXT_LOCALE`)
- Middleware handles automatic language detection and routing

### Language Switching

The `LanguageSwitcher` component allows users to switch between languages. The selected language is:
1. Stored in a cookie for persistence
2. Reflected in the URL
3. Applied to all page content

### Translations

Translations are stored in JSON files in `src/dictionaries/`. Each language has its own file with a consistent structure for type safety.

## Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Customization

### Change Default Language

Edit `src/lib/i18n.ts`:
```typescript
export const i18n = {
  defaultLocale: 'en',  // Change from 'he' to 'en'
  locales: ['he', 'en'],
} as const;
```

### Styling

This template uses Tailwind CSS. Customize the theme in `tailwind.config.ts`.

## Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your site will be live!

[Deploy with Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fnext-i18n-template)

### Other Deployment Options

- [Netlify](https://netlify.com)
- [AWS Amplify](https://aws.amazon.com/amplify)
- [Docker](https://www.docker.com)

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## License

MIT License - feel free to use this template for your projects.

## Support

If you have questions or need help, please open an issue on GitHub.
