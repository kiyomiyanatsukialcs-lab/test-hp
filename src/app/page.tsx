import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollRevealInit from '@/components/ScrollRevealInit';
import HeroSection from '@/components/sections/HeroSection';
import SpaceSection from '@/components/sections/SpaceSection';
import RoutineSection from '@/components/sections/RoutineSection';
import ConceptSection from '@/components/sections/ConceptSection';
import ClassSection from '@/components/sections/ClassSection';
import GallerySection from '@/components/sections/GallerySection';
import FAQSection from '@/components/sections/FAQSection';
import AccessSection from '@/components/sections/AccessSection';

export default function Home() {
  return (
    <>
      <ScrollRevealInit />
      <Header />
      <main>
        <HeroSection />
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
