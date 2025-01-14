import React from "react";
type EmployeeCardProps = {
  name: string;
  currentRole: string;
  company: string;
  previousRole: string;
  previousCompany: string;
  rating: number;
  reviews: number;
  attributes: string[];
};

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  name,
  currentRole,
  company,
  previousRole,
  previousCompany,
  rating,
  reviews,
  attributes,
}) => {
  const ratingColor =
    rating >= 4 ? "bg-green-500" : rating >= 3 ? "bg-yellow-500" : "bg-red-500";

  return (
    <div className="flex items-center border p-4 rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        {/* Placeholder for image */}
        <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
      </div>
      <div className="flex-1 ml-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-600">
          Works at <span className="font-semibold">{company}</span> as{" "}
          <span className="font-semibold">{currentRole}</span>
        </p>
        <p className="text-sm text-gray-600">
          Worked at <span className="font-semibold">{previousCompany}</span> as{" "}
          <span className="font-semibold">{previousRole}</span>
        </p>
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <span>{attributes.join(" | ")}</span>
        </div>
      </div>
      <div className="flex flex-col items-center ml-4">
        <div
          className={`text-white font-bold py-1 px-3 rounded-full text-sm ${ratingColor}`}
        >
          {rating.toFixed(1)} ★
        </div>
        <span className="text-xs text-gray-500 mt-1">{reviews} Reviews</span>
      </div>
    </div>
  );
};

export default EmployeeCard;
