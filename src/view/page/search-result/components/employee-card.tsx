import React from "react";
import { BsSave2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RouteUrl } from "../../../router/url";
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
    <div className="bg-white flex items-center border p-5 rounded-lg">
      <div className="flex-shrink-0">
        {/* Placeholder for image */}
        <div className="w-24 h-24 bg-gray-300 rounded-md"></div>
      </div>
      <div className="flex-1 ml-4">
        <Link to={RouteUrl.SINGLE_PROFILE} className="text-lg font-bold">
          {name}
        </Link>
        <p className="text-sm text-gray-600">
          Works at <span className="font-bold">{company}</span> as{" "}
          <span className="font-bold">{currentRole}</span>
        </p>
        <p className="text-sm text-gray-600">
          Worked at <span className="font-bold">{previousCompany}</span> as{" "}
          <span className="font-bold">{previousRole}</span>
        </p>
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <span>{attributes.join(" | ")}</span>
        </div>
      </div>
      <div className="flex flex-col items-center ml-4">
        <div
          className={`text-white font-bold py-3 px-7 rounded-md text-md ${ratingColor}`}
        >
          {rating.toFixed(1)} ★
        </div>
        <span className="text-xs text-gray-500 mt-1">{reviews} Reviews</span>
        <div className="mt-5">
          <button className="bg-slate-100 border-2 p-2 rounded-lg flex items-center gap-2">
            <BsSave2 />
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
