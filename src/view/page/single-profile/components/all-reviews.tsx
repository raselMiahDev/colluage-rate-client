import React from "react";

const AllReviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      reviewer: "Ruhul Amin",
      role: "Supervisor",
      workplace: "Works at Codex IT together",
      ratings: [4, 4, 4, 4, 4],
      reviewText:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
      date: "June 18, 2024",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6 mt-6">
      <h3 className="text-lg font-bold">10 Reviews</h3>
      {reviews.map((review) => (
        <div key={review.id} className="border-t border-gray-300 py-4">
          <div className="flex items-center gap-4">
            <img
              src="/assets/reviewer.jpg"
              alt="Reviewer"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h4 className="font-bold">{review.reviewer}</h4>
              <p className="text-gray-600">{review.role}</p>
            </div>
          </div>
          <p className="mt-2 text-gray-600">{review.workplace}</p>
          <div className="flex gap-2 mt-2">
            {review.ratings.map((rating, index) => (
              <span key={index} className="text-yellow-500">
                {rating}★
              </span>
            ))}
          </div>
          <p className="mt-2">{review.reviewText}</p>
          <div className="flex gap-4 mt-2">
            <button className="text-blue-500 hover:underline">
              Appreciate
            </button>
            <button className="text-blue-500 hover:underline">Doubtful</button>
          </div>
          <p className="text-gray-400 text-sm">{review.date}</p>
        </div>
      ))}
    </div>
  );
};

export default AllReviews;
