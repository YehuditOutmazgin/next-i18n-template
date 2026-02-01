import { type Locale } from '@/lib/i18n';
import { getDictionary } from '@/dictionaries';
import Container from '@/components/ui/Container';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            {dict.about.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center">
            {dict.about.content}
          </p>
        </div>
      </Container>
    </section>
  );
}
