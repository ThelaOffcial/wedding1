import Particles from "@/components/Particles";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Venue from "@/components/Venue";
import Rsvp from "@/components/Rsvp";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Page() {
  return (
    <>
      <Particles />
      <main className="relative z-10">
        <Hero />
        <Countdown />
        <Events />
        <Gallery />
        <Venue />
        <Rsvp />
        <Footer />
      </main>
      <MusicPlayer />
      <WhatsAppButton />
    </>
  );
}
