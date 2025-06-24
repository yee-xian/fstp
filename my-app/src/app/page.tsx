// src/app/page.tsx
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      {/* You can add more sections here as your homepage grows */}
      <Footer />
    </main>
  );
}
