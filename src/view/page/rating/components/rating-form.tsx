import React, { useState } from "react";
import { RatingController, FormData } from "../rating.controller";
import RatingComponent from "./rating-components";
const RatingForm: React.FC = () => {
  const controller = new RatingController();
  const [formData, setFormData] = useState<FormData>(controller.getFormData());

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    controller.updateField(name, value);
    setFormData({ ...controller.getFormData() });
  };

  // Handle rating changes
  const handleRatingChange = (key: string, value: number) => {
    controller.updateRating(key, value);
    setFormData({ ...controller.getFormData() });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    controller.handleSubmit((data) => {
      console.log("Form Data Submitted:", data);
    });
  };
  return (
    <form className="max-w-5xl space-y-6" onSubmit={handleSubmit}>
      {/* Header */}
      <div className="space-y-1">
        <span className="text-slate-600">Rate</span>
        <h1 className="text-3xl font-bold text-gray-800">Rakibul Hasan</h1>
        <p className="text-sm text-gray-600">
          <span className="font-bold">Manager</span> at{" "}
          <span className="font-bold">CompanyX</span>
        </p>
      </div>

      <div>
        <span className="border-b-2 border-black text-2xl font-bold">
          Questions
        </span>
      </div>
      {/* Work Relationship */}
      <div className="bg-white p-5 border rounded-md">
        <label className="block text-xl font-medium mb-5">
          Q1: Define Work Relationship *
        </label>
        <div className="flex space-x-4">
          <button
            type="button"
            className={`py-2 px-4 rounded text-sm font-medium ${
              formData.workRelationship === "Peer"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => {
              controller.updateField("workRelationship", "Peer");
              setFormData({ ...controller.getFormData() });
            }}
          >
            Peer
          </button>
          <button
            type="button"
            className={`py-2 px-4 rounded text-sm font-medium ${
              formData.workRelationship === "Supervisor"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => {
              controller.updateField("workRelationship", "Supervisor");
              setFormData({ ...controller.getFormData() });
            }}
          >
            Supervisor
          </button>
        </div>
      </div>

      {/* Company Worked Together */}
      <div className="bg-white p-5 border rounded-md">
        <label
          htmlFor="companyWorked"
          className="block text-xl font-medium mb-5"
        >
          Company Worked Together
        </label>
        <input
          type="text"
          id="companyWorked"
          name="companyWorked"
          className="w-full p-3 border rounded-lg"
          placeholder="Quick search for company"
          value={formData.companyWorked}
          onChange={handleInputChange}
        />
      </div>

      {/* Recommendation */}
      <div className="bg-white p-5 border rounded-md">
        <label className="block text-xl font-medium mb-5">
          Q3: Would You Recommend Working With This Person *
        </label>
        <div className="flex space-x-4">
          <button
            type="button"
            className={`py-2 px-4 rounded text-sm font-medium ${
              formData.recommend === "Yes"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => {
              controller.updateField("recommend", "Yes");
              setFormData({ ...controller.getFormData() });
            }}
          >
            Yes
          </button>
          <button
            type="button"
            className={`py-2 px-4 rounded text-sm font-medium ${
              formData.recommend === "No"
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => {
              controller.updateField("recommend", "No");
              setFormData({ ...controller.getFormData() });
            }}
          >
            No
          </button>
        </div>
      </div>

      {/* Ratings */}
      <div className="">
        <RatingComponent
          formData={formData}
          handleRatingChange={handleRatingChange}
        />
      </div>

      {/* Review */}
      <div className="bg-white p-5 border rounded-md">
        <label htmlFor="review" className="block text-xl font-medium mb-5">
          Write a review *
        </label>
        <textarea
          id="review"
          name="review"
          className="w-full p-3 border rounded-lg"
          rows={5}
          placeholder="Provide constructive feedback..."
          value={formData.review}
          onChange={handleInputChange}
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="bg-white p-5 border rounded-md">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Submit Review
        </button>
      </div>
    </form>
  );
};
export default RatingForm;

// {Object.keys(formData.ratings).map((key) => (
//   <div key={key} className="space-y-1">
//     <span className="block text-md font-medium text-gray-700 capitalize">
//       {key.replace(/([A-Z])/g, " $1").trim()}
//     </span>
//     <div className="flex items-center space-x-1">
//       {[1, 2, 3, 4, 5].map((value) => (
//         <button
//           type="button"
//           key={value}
//           className={`w-8 h-8 rounded-full ${
//             formData.ratings[key as keyof typeof formData.ratings] >=
//             value
//               ? "bg-yellow-400"
//               : "bg-gray-200"
//           }`}
//           onClick={() => handleRatingChange(key, value)}
//         >
//           {value}
//         </button>
//       ))}
//     </div>
//   </div>
// ))}
