import { client } from '@/lib/microcms';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollRevealInit from '@/components/ScrollRevealInit';
import HeroSection from '@/components/sections/HeroSection';
import NewsSection, { type NewsArticle } from '@/components/sections/NewsSection';
import SpaceSection from '@/components/sections/SpaceSection';
import RoutineSection from '@/components/sections/RoutineSection';
import ConceptSection from '@/components/sections/ConceptSection';
import ClassSection from '@/components/sections/ClassSection';
import GallerySection from '@/components/sections/GallerySection';
import FAQSection from '@/components/sections/FAQSection';
import AccessSection from '@/components/sections/AccessSection';

async function fetchNews(): Promise<NewsArticle[]> {
  try {
    const data = await client.getList<NewsArticle>({
      endpoint: 'news',
      customRequestInit: { next: { revalidate: 60 } },
    });
    return data.contents;
  } catch {
    return [];
  }
}

export default async function Home() {
  const articles = await fetchNews();

  return (
    <>
      <ScrollRevealInit />
      <Header />
      <main>
        <HeroSection />
        <NewsSection articles={articles} />
        <SpaceSection />
        <RoutineSection />
        <ConceptSection />
        <ClassSection />
        <GallerySection />
        <FAQSection />
        <AccessSection />
      </main>
      <Footer />
    </>
  );
}
