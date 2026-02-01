import { type Locale } from '@/lib/i18n';
import { type Dictionary } from '@/types/dictionary';
import Container from '../ui/Container';
import Button from '../ui/Button';
import LocalizedLink from '../ui/LocalizedLink';

interface HeroSectionProps {
  lang: Locale;
  dict: Dictionary;
}

export default function HeroSection({ lang, dict }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 md:py-24 lg:py-32">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtitle */}
          <p className="text-primary-600 font-semibold text-sm md:text-base lg:text-lg mb-4 md:mb-6">
            {dict.home.hero.subtitle}
          </p>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 text-balance">
            {dict.home.hero.title}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto text-balance">
            {dict.home.hero.description}
          </p>

          {/* CTA Button */}
          <LocalizedLink href="/contact" lang={lang}>
            <Button size="lg" className="w-full sm:w-auto">
              {dict.home.hero.cta}
            </Button>
          </LocalizedLink>
        </div>
      </Container>
    </section>
  );
}
