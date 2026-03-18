import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { PainPoints } from "@/components/sections/pain-points";
import { Services } from "@/components/sections/services";
import { Demo } from "@/components/sections/demo";
import { PricingPhone } from "@/components/sections/pricing-phone";
import { PricingAssistant } from "@/components/sections/pricing-assistant";
import { HowItWorks } from "@/components/sections/how-it-works";
import { FAQ } from "@/components/sections/faq";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <Demo />
        <PricingPhone />
        <PricingAssistant />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
