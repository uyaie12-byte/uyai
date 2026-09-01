import { Hero } from "@/components/home/hero";
import { CampPromo } from "@/components/home/camp-promo";
import { AboutBand } from "@/components/home/about-band";
import { NewMusicSection } from "@/components/home/new-music-section";
import { ArtistSpotlightSection } from "@/components/home/artist-spotlight-section";
import { TheDraftSection } from "@/components/home/the-draft-section";
import { ArtistPickSection } from "@/components/home/artist-pick-section";
import { ThrowbackSection } from "@/components/home/throwback-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { JoinDraftAutoOpen } from "@/components/home/join-draft-auto-open";

export default function HomePage() {
  return (
    <>
      <JoinDraftAutoOpen />
      <Hero />
      <CampPromo />
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
