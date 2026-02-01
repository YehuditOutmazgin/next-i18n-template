'use client';

import { type Locale } from '@/lib/i18n';
import { useState, useEffect } from 'react';
import { getDictionary } from '@/dictionaries';
import { type Dictionary } from '@/types/dictionary';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function ContactPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const [dict, setDict] = useState<Dictionary | null>(null);
  const [lang, setLang] = useState<Locale | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    params.then(({ lang: locale }) => {
      setLang(locale);
      getDictionary(locale).then(setDict);
    });
  }, [params]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  if (!dict || !lang) return null;

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <Container>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            {dict.contact.title}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                {dict.contact.form.name}
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {dict.contact.form.email}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                {dict.contact.form.message}
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" size="lg" className="w-full">
              {dict.contact.form.submit}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
