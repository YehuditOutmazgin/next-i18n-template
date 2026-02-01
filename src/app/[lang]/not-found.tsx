import { type Locale } from '@/lib/i18n';
import { getDictionary } from '@/dictionaries';
import Button from '@/components/ui/Button';
import LocalizedLink from '@/components/ui/LocalizedLink';

export default async function NotFound() {
  const dict = await getDictionary('he');

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl md:text-8xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {dict.common.notFound}
        </h2>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
        <LocalizedLink href="/" lang="he">
          <Button>{dict.common.backHome}</Button>
        </LocalizedLink>
      </div>
    </div>
  );
}
