import HelmetCon from "../../components/common/helmet-con";
import ContainerSectionWrapper from "../../components/layout/container-section-wrapper.comp";
import PageWrapper from "../../components/layout/page-wrapper";
import AboutYouForm from "./components/about-you.form";
import { ImageConstants } from "../../../constants/image.constants";
import PrivacyAlert from "../../components/common/privacy-alert";

const AboutYouPage = () => {
  return (
    <PageWrapper>
      <HelmetCon title="About You" />
      <ContainerSectionWrapper>
        <div className="grid md:grid-cols-2 px-10 md:px-0 space-x-32">
          <div>
            <img src={ImageConstants.Almost} alt="" />
          </div>
          <div className="space-y-5 px-0 md:px-10">
            <h1 className="text-3xl font-bold">Almost There 👏</h1>
            <p>
              Tell us little-bit about you. it will help <br /> us to find you
              more easily
            </p>
            <PrivacyAlert />
            <AboutYouForm />
          </div>
        </div>
      </ContainerSectionWrapper>
    </PageWrapper>
  );
};

export default AboutYouPage;
