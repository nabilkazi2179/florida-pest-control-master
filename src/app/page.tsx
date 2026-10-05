import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Statistics from "@/components/statistics";
import Footer from "@/components/footer";
import Values from "@/components/values";
import Services from "@/components/services";
import ServiceAreas from "@/components/service-areas";
import { InfiniteMovingCards } from "@/components/our-clients";
import ServicesShowcase from "@/components/service-home";
import CertificatesSection from "@/components/certificates";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <Header />
      <Hero />
      <ServicesShowcase />
      <About />
      <InfiniteMovingCards />
      <Values />
      <ServiceAreas />
      <Services />
      <CertificatesSection />
      <Statistics />
      <Footer />
    </main>
  );
}

//  ./deploy-flpc.sh
