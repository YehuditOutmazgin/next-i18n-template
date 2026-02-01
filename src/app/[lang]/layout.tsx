import type { Metadata } from 'next';
import { Heebo } from 'next/font/google';
import { Inter } from 'next/font/google';
import { i18n, type Locale, localeDirections } from '@/lib/i18n';
import { getDictionary } from '@/dictionaries';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/app/globals.css';

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  variable: '--font-heebo',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        he: '/he',
        en: '/en',
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale: lang,
      type: 'website',
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const direction = localeDirections[lang];
  const fontClass = lang === 'he' ? heebo.variable : inter.variable;

  console.log('=== RootLayout Debug ===');
  console.log('Layout lang param:', lang);

  return (
    <html lang={lang} dir={direction} className={fontClass}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Navbar lang={lang} dict={dict} />
        <main className="flex-grow">{children}</main>
        <Footer lang={lang} dict={dict} />
      </body>
    </html>
  );
}
