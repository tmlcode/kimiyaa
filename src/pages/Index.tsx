import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Process />
        <Features />
        <Testimonials />
        <Team />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
