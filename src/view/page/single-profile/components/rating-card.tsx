import React from "react";

type RatingCardProps = {
  rating: number; // Rating value passed from the parent
  ratingField: string;
};

const RatingCard: React.FC<RatingCardProps> = ({ rating, ratingField }) => {
  return (
    <div className="max-w-sm p-4 bg-gray-100 rounded-md mb-3 md:mb-0">
      <div className="text-center">
        <div className="text-4xl font-bold text-gray-900">{rating}</div>
        <div className="flex justify-center mt-2">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              fill={index < rating ? "gold" : "none"}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-6 h-6 ${
                index < rating ? "text-yellow-500" : "text-gray-300"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
          ))}
        </div>
        <div className="mt-2 text-lg font-medium text-gray-600">
          {ratingField}
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
