import { Link } from "react-router-dom";
export default function StartYourSearch() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="text-center mb-8">
        <h2 className="text-lg font-bold">Start Your Search</h2>
        <p className="text-sm text-gray-500 mb-6">
          Need to know about your future colleague? See what millions of people
          are saying about their colleague today.
        </p>
        <Link
          to="/signup"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Sign Up Now
        </Link>
      </div>
    </div>
  );
}
