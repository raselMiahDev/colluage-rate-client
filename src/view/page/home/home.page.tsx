import ContainerSectionWrapper from "../../components/layout/container-section-wrapper.comp";
import PageWrapper from "../../components/layout/page-wrapper";
import HeroSection from "./components/hero-section";
import WhyFreshWorkplace from "./components/why-fresh-workplace";
import TrustTransparency from "./components/trust-transparency";
import HowItWorks from "./components/how-it-works";
import CommunityImpact from "./components/community-impact";
import HelmetCon from "../../components/common/helmet-con";

const HomePage = () => {
  return (
    <PageWrapper>
      <HelmetCon title="Home" />
      <ContainerSectionWrapper>
        <HeroSection />
        <WhyFreshWorkplace />
        <TrustTransparency />
        <HowItWorks />
        <CommunityImpact />
      </ContainerSectionWrapper>
    </PageWrapper>
  );
};

export default HomePage;
