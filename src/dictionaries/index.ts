import { cache } from 'react';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/types/dictionary';

export const getDictionary = cache(async (locale: Locale): Promise<Dictionary> => {
  try {
    return (await import(`@/dictionaries/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load dictionary for locale: ${locale}`, error);
    return (await import(`@/dictionaries/he.json`)).default;
  }
});
