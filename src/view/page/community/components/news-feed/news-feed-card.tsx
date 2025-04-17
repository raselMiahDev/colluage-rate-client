import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import Image from "../../../../../assets/avater.svg";
import Post from "../../../../../assets/post.jpg";
const NewsFeedCard = () => {
  return (
    <div className="bg-white border p-4 rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <img src={Image} alt="" className="w-10 h-10 rounded-full" />
          <div>
            <h2 className="text-md font-semibold">Title</h2>
            <p className="text-sm text-gray-500">Rakibul Hasan</p>
          </div>
        </div>
        <span>
          <BsThreeDotsVertical className="text-gray-800" />
        </span>
      </div>
      <div className="space-y-4">
        <h1 className="capitalize text-xl font-semibold pt-2">
          Constant Overtime with no recognition-- feeling burnt out!
        </h1>
        <p className="text-md text-slate-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          molestiae nihil tenetur facere, vitae quia velit neque deleniti
          facilis eaque unde illum similique rem, laboriosam ipsa voluptatibus
          voluptates modi at!
        </p>
        <img src={Post} alt="" className="rounded-md h-96 w-full" />
      </div>
      <div className="flex items-center justify-between pt-6">
        <div className="space-x-3 flex">
          <button className="border rounded-md p-2 flex items-center gap-1">
            <AiOutlineLike /> Agree
          </button>
          <button className="border rounded-md p-2 flex items-center gap-1">
            <AiOutlineDislike /> Disagree
          </button>
          <button className="border rounded-md p-2 flex items-center gap-1">
            <FaRegCommentDots /> Comments
          </button>
        </div>
        <div>
          <button className="border rounded-md p-2 flex items-center gap-1">
            <IoShareSocialOutline /> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsFeedCard;
