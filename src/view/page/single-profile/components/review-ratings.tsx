import React from "react";

const ReviewsAndRatings: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-bold">Reviews & Ratings</h3>
      <div className="mt-4">
        <h4 className="text-2xl font-semibold">4.5</h4>
        <p className="text-gray-600">Based on 10 reviews</p>
        <div className="flex gap-4 mt-4">
          <button className="bg-gray-100 py-2 px-4 rounded-full">Peer</button>
          <button className="bg-gray-100 py-2 px-4 rounded-full">
            Supervisor
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {[
            "Communication",
            "Transparency",
            "Knowledge",
            "Leadership",
            "Fairness",
          ].map((category, index) => (
            <div key={index} className="flex items-center gap-2">
              <p className="font-semibold">{category}</p>
              <span className="text-yellow-500">★★★★☆</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsAndRatings;
