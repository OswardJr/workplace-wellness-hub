import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Program from "@/components/Program";
import Impact from "@/components/Impact";
import Coverage from "@/components/Coverage";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <div className="pt-20">
        <Hero />
        <Services />
        <Benefits />
        <Program />
        <Impact />
        <Coverage />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
