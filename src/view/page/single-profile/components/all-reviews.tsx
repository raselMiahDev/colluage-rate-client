import React from "react";
import Avater from "../../../../assets/avater.svg";
import { CiSquareInfo } from "react-icons/ci";
import { TbArrowBigUpLine, TbArrowBigDownLine } from "react-icons/tb";
import RatingCard from "./rating-card";
import { FaStar } from "react-icons/fa";

const AllReviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      reviewer: "Ruhul Amin",
      role: "Supervisor",
      workplace: "Works at Codex IT together",
      ratings: [3, 5, 3, 5, 1],
      ratSubject: "Fairnes",
      reviewText:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
      date: "June 18, 2024",
    },
    {
      id: 2,
      reviewer: "Amin",
      role: "Supervisor",
      workplace: "Works at Codex IT together",
      ratings: [3, 5, 3, 5, 1],
      ratSubject: "Fairnes",
      reviewText:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
      date: "June 18, 2024",
    },
  ];

  return (
    <div className="py-7">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold border-b-2 border-black">
          10 Reviews
        </span>
        <div>
          <label htmlFor="">Sort By</label> <br />
          <select
            name=""
            id=""
            className="w-56 border py-1 px-2 rounded-md text-slate-500 focus:outline-none"
          >
            <option value="new">New</option>
            <option value="new">Latest</option>
          </select>
        </div>
      </div>
      <div className=" ">
        {reviews.map((review) => (
          <div className="bg-white rounded-lg border p-6 my-6" key={review.id}>
            <div className="flex items-start gap-4">
              <div>
                <img
                  src={Avater}
                  alt="Reviewer"
                  className="w-22 h-22 rounded"
                />
                <div className="bg-[#22C55E] text-white text-center px-4 py-2 text-2xl mt-8 font-bold rounded flex items-center space-x-2">
                  {" "}
                  <span>4.5</span>
                  <FaStar className="text-yellow-400" />
                </div>
              </div>
              <div>
                <div>
                  <div className="flex justify-between">
                    <h4 className="font-bold text-xl">{review.reviewer}</h4>
                    <p className="text-sm">{review.date}</p>
                  </div>
                  <p className="font-bold text-sm">{review.role}</p>
                  <p className="mt-2 text-gray-600">{review.workplace}</p>
                </div>
                <div className="md:flex gap-5 py-5 mb-3">
                  {review.ratings.map((rating) => (
                    <RatingCard
                      rating={rating}
                      ratingField={review.ratSubject}
                    />
                  ))}
                </div>
                <p className="mb-5">{review.reviewText}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-6">
                    <div className="flex gap-3 items-center text-lg">
                      <TbArrowBigUpLine />
                      <button className=" hover:underline">Appreciate</button>
                    </div>
                    <div className="flex gap-3 items-center text-lg">
                      <TbArrowBigDownLine />
                      <button className="hover:underline">Doubtful</button>
                    </div>
                  </div>
                  <CiSquareInfo size={25} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
