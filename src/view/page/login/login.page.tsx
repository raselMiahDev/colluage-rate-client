import ContainerSectionWrapper from "../../components/layout/container-section-wrapper.comp";

import PageWrapper from "../../components/layout/page-wrapper";
import Login from "./components/login";

const LoginPage = () => {
  return (
    <PageWrapper>
      <div>
        <ContainerSectionWrapper>
          <Login />
        </ContainerSectionWrapper>
      </div>
    </PageWrapper>
  );
};

export default LoginPage;
