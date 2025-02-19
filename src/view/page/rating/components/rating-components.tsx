import React from "react";

// Define types for ratings object
interface Ratings {
  [key: string]: number;
}

// Define props for RatingComponent
interface RatingComponentProps {
  formData: { ratings: Ratings };
  handleRatingChange: (key: string, value: number) => void;
}

const RatingComponent: React.FC<RatingComponentProps> = ({
  formData,
  handleRatingChange,
}) => {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(formData.ratings).map((key) => (
          <div key={key} className="bg-white p-5 border rounded-md">
            {/* Rating Label */}
            <span className="block text-md font-medium text-gray-700 capitalize">
              {key.replace(/([A-Z])/g, " $1").trim()}
            </span>

            {/* Rating Stars */}
            <div className="flex items-center space-x-1 pt-4">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  className={`w-10 h-10 text-xl rounded-full transition-colors duration-300 ${
                    formData.ratings[key] >= value
                      ? "bg-yellow-400 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                  onClick={() => handleRatingChange(key, value)}
                >
                  ★
                </button>
              ))}
            </div>

            {/* Display Rating Value */}
            <span className="text-sm text-gray-500">
              Rating: {formData.ratings[key]}/5
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingComponent;
