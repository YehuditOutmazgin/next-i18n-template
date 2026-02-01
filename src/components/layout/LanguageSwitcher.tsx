'use client';

import { usePathname, useRouter } from 'next/navigation';
import { type Locale, i18n, localeNames } from '@/lib/i18n';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  lang: Locale;
}

export default function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLang: Locale) => {
    if (newLang === lang) {
      return;
    }

    let newPath: string;

    // Extract the path without the locale prefix
    let pathWithoutLocale = pathname;
    
    // Remove /en or /he from the start if present
    if (pathname.startsWith('/en/') || pathname.startsWith('/he/')) {
      pathWithoutLocale = pathname.slice(3); // Remove first 3 chars (/en or /he)
    } else if (pathname === '/en' || pathname === '/he') {
      pathWithoutLocale = '/';
    }

    // Build new path with new locale
    if (newLang === 'he') {
      // Hebrew is default, so use /he prefix for consistency
      newPath = '/he' + (pathWithoutLocale === '/' ? '' : pathWithoutLocale);
    } else {
      // English needs /en prefix
      newPath = '/en' + (pathWithoutLocale === '/' ? '' : pathWithoutLocale);
    }

    router.push(newPath);
  };

  return (
    <div className="relative">
      <button
        onClick={() => switchLanguage(lang === 'he' ? 'en' : 'he')}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors border border-gray-300 rounded-lg hover:border-primary-600"
        aria-label="Switch language"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{localeNames[lang]}</span>
        <span className="sm:hidden">{lang.toUpperCase()}</span>
      </button>
    </div>
  );
}
