import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import Image from "../../../../../assets/avater.svg";
const Tranding = () => {
  const trendingContent = [
    {
      id: 1,
      tag: "Workplace Policies",
      userImage: Image,
      userName: "Md Kamal",
      dayAgo: "3d",
      text: "Which teach industry is the best industry for you to work at 2025",
      like: "1600",
      dislike: "17",
      seen: "3566",
    },
    {
      id: 2,
      tag: "Workplace Policies",
      userImage: Image,
      userName: "Md Kamal",
      dayAgo: "3d",
      text: "Which teach industry is the best industry for you to work at 2025",
      like: "1600",
      dislike: "17",
      seen: "3566",
    },
    {
      id: 3,
      tag: "Workplace Policies",
      userImage: Image,
      userName: "Md Kamal",
      dayAgo: "3d",
      text: "Which teach industry is the best industry for you to work at 2025",
      like: "1600",
      dislike: "17",
      seen: "3566",
    },
    {
      id: 4,
      tag: "Workplace Policies",
      userImage: Image,
      userName: "Md Kamal",
      dayAgo: "3d",
      text: "Which teach industry is the best industry for you to work at 2025",
      like: "1600",
      dislike: "17",
      seen: "3566",
    },
  ];
  return (
    <div className="sticky top-24 h-[calc(100vh-3rem)] overflow-y-auto">
      <div className="border p-4 bg-white rounded-md">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold">Trending Topics</h1>
          <button className="text-blue-500">See All</button>
        </div>
        {trendingContent.map((item) => {
          return (
            <div key={item.id} className="border p-2 mb-3 rounded-md space-y-2">
              <span className="bg-slate-100 p-1 rounded-md">{item.tag}</span>
              <div className="flex items-center gap-2 mt-2">
                <img
                  src={item.userImage}
                  alt=""
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm font-semibold">{item.userName}</span>
                <span className="text-sm text-gray-500">{item.dayAgo}</span>
              </div>
              <h1 className="text-lg font-semibold">{item.text}</h1>
              <div className="space-x-3 flex text-slate-500">
                <button className=" p-2 flex items-center gap-1">
                  <AiOutlineLike /> {item.like}
                </button>
                <button className=" p-2 flex items-center gap-1">
                  <AiOutlineDislike /> {item.dislike}
                </button>
                <button className=" p-2 flex items-center gap-1">
                  <FaRegCommentDots /> {item.seen}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tranding;
