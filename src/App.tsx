import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { WhyUs } from "@/components/site/WhyUs";
import { Gallery } from "@/components/site/Gallery";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export function App() {
  return (
    <div className="min-h-screen bg-navy-deep text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyUs />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
