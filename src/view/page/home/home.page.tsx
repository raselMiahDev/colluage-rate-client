import ContainerSectionWrapper from "../../components/layout/container-section-wrapper.comp";
import PageWrapper from "../../components/layout/page-wrapper";
import HeroSection from "./components/hero-section";

const HomePage = () => {
  return (
    <PageWrapper>
      <ContainerSectionWrapper>
        <HeroSection />
      </ContainerSectionWrapper>
    </PageWrapper>
  );
};

export default HomePage;
