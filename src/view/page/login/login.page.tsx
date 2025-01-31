import ContainerSectionWrapper from "../../components/layout/container-section-wrapper.comp";
import PageWrapper from "../../components/layout/page-wrapper";
import Login from "./components/login";
import HelmetCon from "../../components/common/helmet-con";

const LoginPage = () => {
  return (
    <PageWrapper>
      <div>
        <ContainerSectionWrapper>
          <HelmetCon title="Login" />
          <Login />
        </ContainerSectionWrapper>
      </div>
    </PageWrapper>
  );
};

export default LoginPage;
