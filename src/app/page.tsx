import { About } from "@/components/About";
import { BackToTop } from "@/components/BackToTop";
import { Contact } from "@/components/Contact";
import { CursorGlow } from "@/components/CursorGlow";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PageIntro } from "@/components/PageIntro";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Stack } from "@/components/Stack";

export default function Home() {
  return (
    <>
      <PageIntro />
      <ScrollProgress />
      <CursorGlow />
      <div className="noise" aria-hidden />
      <Navbar />
      <main className="relative z-[2]">
        <Hero />
        <About />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
