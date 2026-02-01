import Link from 'next/link';
import { type Locale, i18n } from '@/lib/i18n';

interface LocalizedLinkProps {
  href: string;
  lang: Locale;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function LocalizedLink({
  href,
  lang,
  children,
  className,
  onClick,
}: LocalizedLinkProps) {
  const localizedHref = `/${lang}${href}`;

  return (
    <Link href={localizedHref} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
