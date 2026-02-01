import { type Locale } from '@/lib/i18n';
import { type Dictionary } from '@/types/dictionary';
import Container from '../ui/Container';
import { Smartphone, Globe, Zap } from 'lucide-react';

interface FeaturesSectionProps {
  lang: Locale;
  dict: Dictionary;
}

export default function FeaturesSection({ lang, dict }: FeaturesSectionProps) {
  const icons = [Smartphone, Globe, Zap];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <Container>
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-16">
          {dict.home.features.title}
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {dict.home.features.items.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="text-center p-6 md:p-8 rounded-2xl hover:bg-gray-50 transition-colors"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-primary-100 text-primary-600 rounded-2xl mb-6">
                  <Icon className="w-8 h-8 md:w-10 md:h-10" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-600 text-balance">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
