import { Link } from "react-router-dom";
import { ImageConstants } from "../../../../constants/image.constants";
import { RouteUrl } from "../../../router/url";
const TrustTransparency = () => {
  return (
    <section className=" py-12 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <img
            src={ImageConstants.Transparency}
            alt="Trust and Transparency"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Trust and Transparency</h2>
          <p className="text-gray-600 mb-6">
            Anonymously share experiences with your peers and supervisors.
            FreshWorkplace is here to create accountability and openness within
            teams and leadership.
          </p>
          <Link to={RouteUrl.ALL_PROFILE} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Start Rating
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrustTransparency;
