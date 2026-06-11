import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Strengths from "@/components/Strengths";
import Works from "@/components/Works";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Strengths />
        <Works />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
