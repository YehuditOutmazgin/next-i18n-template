'use client';

import { useState } from 'react';
import { type Locale } from '@/lib/i18n';
import { type Dictionary } from '@/types/dictionary';
import LanguageSwitcher from './LanguageSwitcher';
import LocalizedLink from '../ui/LocalizedLink';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  lang: Locale;
  dict: Dictionary;
}

export default function Navbar({ lang, dict }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  console.log('=== Navbar Debug ===');
  console.log('Navbar lang prop:', lang);

  const navLinks = [
    { href: '/', label: dict.nav.home },
    { href: '/about', label: dict.nav.about },
    { href: '/contact', label: dict.nav.contact },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <LocalizedLink
            href="/"
            lang={lang}
            className="text-xl md:text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
          >
            Logo
          </LocalizedLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <LocalizedLink
                    href={link.href}
                    lang={lang}
                    className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                  >
                    {link.label}
                  </LocalizedLink>
                </li>
              ))}
            </ul>
            <LanguageSwitcher lang={lang} />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <LanguageSwitcher lang={lang} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <ul className="py-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <LocalizedLink
                    href={link.href}
                    lang={lang}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
