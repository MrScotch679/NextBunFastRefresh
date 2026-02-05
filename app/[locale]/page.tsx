import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import {
  MobxDemo,
  FramerDemo,
  QueryDemo,
  RadixDemo,
  AppKitDemo,
} from './_components/index';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main style={{ padding: 24 }}>
      <h1>Fast Refresh Reproduction</h1>
      <p>
        <Link href="/">Home</Link>
      </p>

      <section style={{ marginTop: 16 }}>
        <h2>MobX (6×)</h2>
        {Array.from({ length: 6 }, (_, idx) => (
          <MobxDemo key={idx} />
        ))}
      </section>

      <section style={{ marginTop: 16 }}>
        <h2>Framer Motion (5×)</h2>
        {Array.from({ length: 5 }, (_, idx) => (
          <FramerDemo key={idx} />
        ))}
      </section>

      <section style={{ marginTop: 16 }}>
        <h2>React Query (3×)</h2>
        {Array.from({ length: 3 }, (_, idx) => (
          <QueryDemo key={idx} />
        ))}
      </section>

      <section style={{ marginTop: 16 }}>
        <h2>Radix Dropdown (4×)</h2>
        {Array.from({ length: 4 }, (_, idx) => (
          <RadixDemo key={idx} />
        ))}
      </section>

      <section style={{ marginTop: 16 }}>
        <h2>Wagmi / AppKit (1×)</h2>
        <AppKitDemo />
      </section>
    </main>
  );
}
