import ContainerSectionWrapper from "../../components/layout/container-section-wrapper.comp";
import PageWrapper from "../../components/layout/page-wrapper";
import SignUp from "./components/sign-up";

const SignUpPage = () => {
  return (
    <PageWrapper>
      <ContainerSectionWrapper>
        <SignUp />
      </ContainerSectionWrapper>
    </PageWrapper>
  );
};

export default SignUpPage;
