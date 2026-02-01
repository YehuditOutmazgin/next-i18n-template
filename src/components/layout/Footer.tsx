import { type Locale } from '@/lib/i18n';
import { type Dictionary } from '@/types/dictionary';

interface FooterProps {
  lang: Locale;
  dict: Dictionary;
}

export default function Footer({ lang, dict }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container-custom py-8 md:py-12">
        <div className="text-center">
          <p className="text-sm md:text-base text-gray-400">
            {dict.footer.rights} {dict.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
