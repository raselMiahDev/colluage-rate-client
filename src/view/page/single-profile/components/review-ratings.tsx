import React from "react";
const ReviewsAndRatings: React.FC = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-2xl font-bold">Reviews & Ratings</h3>
        <div>
          <div className="flex space-x-3 items-center border-b border-slate-400 py-7">
            <h4 className="text-4xl font-bold">4.5</h4>
            <div>
              <p className="text-gray-600">Based on 10 reviews</p>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <button className="border py-2 px-4 rounded-md">Peer</button>
            <button className="border py-2 px-4 rounded-md">Supervisor</button>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {[
              "Employee Development",
              "Communication",
              "Transparency",
              "Knowledge",
              "Leadership",
              "Fairness",
            ].map((category, index) => (
              <div key={index} className="pb-2">
                <p className="font-semibold">{category}</p>
                <div className="space-x-2">
                  <span>4.5</span>
                  <span className="text-yellow-500 text-lg">★★★★☆</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsAndRatings;
