import { Hero } from "@/components/home/Hero";
import { DualCTA } from "@/components/home/DualCTA";
import { Countdown } from "@/components/home/Countdown";
import { EventDetails } from "@/components/home/EventDetails";
import { Stats } from "@/components/home/Stats";
import { About } from "@/components/home/About";
import { ZonesPreview } from "@/components/home/ZonesPreview";
import { ReturningExhibitors } from "@/components/home/ReturningExhibitors";
import { Testimonials } from "@/components/home/Testimonials";
import { Newsletter } from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DualCTA />
      <Countdown />
      <EventDetails />
      <Stats />
      <About />
      <ZonesPreview />
      <ReturningExhibitors />
      <Testimonials />
      <Newsletter />
    </>
  );
}
