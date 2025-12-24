import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import IntroHighlights from "@/components/IntroHighlights";
import PlatformPreview from "@/components/PlatformPreview";
import FeatureCards from "@/components/FeatureCards";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#Fdfdfd] bg-noise relative">
      <Navbar />
      <Hero />
      <IntroHighlights />
      <PlatformPreview />
      <FeatureCards />
      <Community />
      <Footer />
    </main>
  );
}
