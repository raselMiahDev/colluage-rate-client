import PageWrapper from "../../components/layout/page-wrapper";
import Login from "./components/login";
import HelmetCon from "../../components/common/helmet-con";

const LoginPage = () => {
  return (
    <PageWrapper>
      <HelmetCon title="Login" />
      <Login />
    </PageWrapper>
  );
};

export default LoginPage;
