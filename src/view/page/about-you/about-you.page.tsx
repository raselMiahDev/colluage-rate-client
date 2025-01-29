import ContainerSectionWrapper from "../../components/layout/container-section-wrapper.comp";
import PageWrapper from "../../components/layout/page-wrapper";
import AboutYouForm from "./components/about-you.form";

const AboutYouPage = () => {
  return (
    <PageWrapper>
      <ContainerSectionWrapper>
        <div className="space-y-5">
          <h1 className="text-3xl font-bold">Almost There</h1>
          <p>
            Tell us little-bit about you. it will help <br /> us to find you
            more easily
          </p>
          <AboutYouForm />
        </div>
      </ContainerSectionWrapper>
    </PageWrapper>
  );
};

export default AboutYouPage;
