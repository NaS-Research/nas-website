import NicoleChat from '@/components/NicoleChat';

export const metadata = {
  title: 'Talk to Nicole — NaS',
  description: "Chat with Nicole, NaS’s flagship biomedical language model.",
};

export default function NicolePage({ searchParams }) {
  const seedPrompt = searchParams?.prompt ?? '';

  return (
    <main className="h-screen flex items-center justify-center overflow-hidden">
      <NicoleChat initialPrompt={seedPrompt} />
    </main>
  );
}