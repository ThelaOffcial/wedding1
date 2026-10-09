import Particles from "@/components/Particles";
import ScrollProgress from "@/components/ScrollProgress";
import Stage from "@/components/Stage";
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
      <ScrollProgress />
      <Stage>
        <Hero />
        <Countdown />
        <Events />
        <Gallery />
        <Venue />
        <Rsvp />
        <Footer />
      </Stage>
      <MusicPlayer />
      <WhatsAppButton />
    </>
  );
}
