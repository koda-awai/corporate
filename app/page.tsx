import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Philosophy from "@/components/Philosophy";
import Strengths from "@/components/Strengths";
import Works from "@/components/Works";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Marquee />
      <Philosophy />
      <Strengths />
      <Works />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
