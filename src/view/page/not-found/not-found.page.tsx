import { Link } from "react-router-dom";
import PageWrapper from "../../components/layout/page-wrapper";
import { RouteUrl } from "../../router/url";
import HelmetCon from "../../components/common/helmet-con";

const NotFoundPage = () => {
  return (
    <PageWrapper>
      <HelmetCon title="Not Found page" />

      <div
        className="relative flex items-center justify-center min-h-screen bg-slate-100"
        style={{ backgroundImage: "url()" }}
      >
        <div className="border bg-white bg-opacity-50 p-10 md:p-20 m-7 md:m-0 rounded-lg text-center">
          <h1 className="text-6xl font-bold">404</h1>
          <h2 className="text-2xl mt-2">Page Not Found</h2>
          <p className="text-gray-500 mt-4">
            The page you're looking for doesn't exist has been moved.
          </p>
          <Link
            to={RouteUrl.HOME}
            className="mt-6 inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500"
          >
            Go Home
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
};

export default NotFoundPage;
