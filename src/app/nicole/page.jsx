import NicoleChat from '@/components/NicoleChat';

export const metadata = {
  title: 'Talk to Nicole — NaS',
  description: "Chat with Nicole, NaS’s flagship biomedical language model.",
};

/**
 * /nicole route
 * Optional query string:  /nicole?prompt=hello
 * Next 14 provides `searchParams` as an async iterable, so we `await` it once.
 */
export default function NicolePage({ searchParams }) {
  const seedPrompt = searchParams?.prompt ?? '';

  return (
    <main className="h-screen flex items-center justify-center overflow-hidden">
      <NicoleChat initialPrompt={seedPrompt} />
    </main>
  );
}