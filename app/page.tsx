import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Strengths from "@/components/Strengths";
import Works from "@/components/Works";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      {/* Heroは全画面なのでpadding-topはHero内部で管理 */}
      <Hero />
      <Strengths />
      <Works />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
