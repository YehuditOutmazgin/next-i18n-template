import { type Locale } from '@/lib/i18n';
import { type Dictionary } from '@/types/dictionary';
import Container from '../ui/Container';
import Button from '../ui/Button';
import LocalizedLink from '../ui/LocalizedLink';

interface CTASectionProps {
  lang: Locale;
  dict: Dictionary;
}

export default function CTASection({ lang, dict }: CTASectionProps) {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-r from-primary-600 to-secondary-600">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 text-balance">
            {dict.home.hero.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-100 mb-8 md:mb-12 text-balance">
            {dict.home.hero.description}
          </p>
          <LocalizedLink href="/contact" lang={lang}>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100 border-0 w-full sm:w-auto"
            >
              {dict.home.hero.cta}
            </Button>
          </LocalizedLink>
        </div>
      </Container>
    </section>
  );
}
