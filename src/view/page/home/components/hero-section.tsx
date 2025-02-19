import { useState } from "react";
import { useHeaderController } from "../home.controller";

export default function HeroSection() {
  const { searchColleague } = useHeaderController();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    searchColleague(searchQuery);
  };

  return (
    <section className="bg-[#18191C] text-white py-12 px-4 md:px-16 relative rounded-none md:rounded-2xl">
      <div className="text-center max-w-2xl mx-auto">
        <button className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm uppercase font-semibold mb-4">
          Rate Your Colleague
        </button>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Honest Ratings for Peers <br /> and Supervisors
        </h1>
        <p className="text-gray-400 mb-6">
          Gain insights on workplace dynamics through real reviews of peers and
          supervisors. Make informed choices about the teams and leaders you'll
          work with.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="flex items-center bg-white rounded-lg md:rounded-full shadow-md overflow-hidden w-full max-w-md">
          <input
            type="text"
            placeholder="Enter your colleague name"
            className="flex-grow md:px-4 md:py-2 text-black outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 md:px-4 md:py-2 font-small hover:bg-blue-600"
            onClick={handleSearch}
          >
            Look Up Now
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-blue-600 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-blue-600 rounded-full"></div>
    </section>
  );
}
