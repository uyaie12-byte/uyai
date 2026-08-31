import { Hero } from "@/components/home/hero";
import { AboutBand } from "@/components/home/about-band";
import { NewMusicSection } from "@/components/home/new-music-section";
import { ArtistSpotlightSection } from "@/components/home/artist-spotlight-section";
import { TheDraftSection } from "@/components/home/the-draft-section";
import { ArtistPickSection } from "@/components/home/artist-pick-section";
import { ThrowbackSection } from "@/components/home/throwback-section";
import { NewsletterSection } from "@/components/home/newsletter-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutBand />
      <NewMusicSection />
      <ArtistSpotlightSection />
      <TheDraftSection />
      <ArtistPickSection />
      <ThrowbackSection />
      <NewsletterSection />
    </>
  );
}
