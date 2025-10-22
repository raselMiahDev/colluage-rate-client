import { Link } from "react-router-dom";
import { ImageConstants } from "../../../../constants/image.constants";
import { RouteUrl } from "../../../router/url";
const CommunityImpact = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Community Impact</h2>
          <p className="text-gray-600 mb-6">
            Help shape a culture of transparency and accountability. By sharing
            feedback on peers and supervisors, you contribute to a workplace
            that values respect, collaboration, and growth.
          </p>
          <Link to={RouteUrl.COMMUNITY} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Join Community
          </Link>
        </div>
        <div className="flex justify-center">
          <img
            src={ImageConstants.Community}
            alt="Community Impact"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;
