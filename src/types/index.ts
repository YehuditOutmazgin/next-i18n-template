export type { Dictionary } from './dictionary';
export type { Locale } from '@/lib/i18n';

export interface PageProps<T = Record<string, never>> {
  params: { lang: string } & T;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export interface LayoutProps {
  children: React.ReactNode;
  params: { lang: string };
}
