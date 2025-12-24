import Hero from "@/components/Hero";
import IntroHighlights from "@/components/IntroHighlights";
import PlatformPreview from "@/components/PlatformPreview";
import FeatureCards from "@/components/FeatureCards";
import Community from "@/components/Community";

export default function Home() {
  return (
    <main className="bg-[#Fdfdfd] bg-noise relative">
      <Hero />
      <IntroHighlights />
      <PlatformPreview />
      <FeatureCards />
      <Community />
    </main>
  );
}
