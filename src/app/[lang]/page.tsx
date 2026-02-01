import { type Locale } from '@/lib/i18n';
import { getDictionary } from '@/dictionaries';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import CTASection from '@/components/home/CTASection';

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <HeroSection lang={lang} dict={dict} />
      <FeaturesSection lang={lang} dict={dict} />
      <CTASection lang={lang} dict={dict} />
    </>
  );
}
