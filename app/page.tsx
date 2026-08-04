import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import VerticalPicker from "@/components/sections/VerticalPicker";
import ProblemQuote from "@/components/sections/ProblemQuote";
import ProductShowcase from "@/components/sections/ProductShowcase";
import HowItWorks from "@/components/sections/HowItWorks";
import TechStack from "@/components/sections/TechStack";
import Pricing from "@/components/sections/Pricing";
import SocialProof from "@/components/sections/SocialProof";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <VerticalPicker />
        <ProblemQuote />
        <ProductShowcase />
        <HowItWorks />
        <TechStack />
        <Pricing />
        <SocialProof />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
