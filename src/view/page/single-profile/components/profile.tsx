import React from "react";
import Avater from "../../../../assets/avater.svg";
import { CiBookmark } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

const Profile: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-6">
      <div>
        <img src={Avater} alt="Profile" className="w-22 h-30 rounded-md" />
        <div className="pt-7">
          <button className="bg-[#006BFF] text-white py-3 px-5 rounded-md hover:bg-blue-600 flex space-x-2 items-center">
            <span>Rate Now</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex space-x-3 items-center">
              <h2 className="text-3xl font-bold">Rakibul Hasan</h2>
              <CiBookmark size={24} color="#4B465C" />
            </div>
            <p className="text-gray-600">
              Works at <span className="font-bold">Codex IT</span> as Manager
            </p>
            <p className="text-gray-600">
              Worked at <span className="font-bold">Mahasagor IT Solution</span>{" "}
              as Frontend Developer
            </p>
          </div>
          <div>
            <div className="bg-[#22C55E] text-white px-4 py-2 text-2xl font-bold rounded">
              {" "}
              4.5/5
            </div>
          </div>
        </div>
        <div className="flex md:justify-end  gap-6 pt-5">
          <div className="bg-[#374151] py-4 px-3 rounded-md text-white text-center">
            <p className="text-3xl font-bold">85%</p>
            <p>Would work again</p>
            <p>As Supervisor</p>
          </div>
          <div className="bg-[#374151] py-4 px-3 rounded-md text-white text-center">
            <p className="text-3xl font-bold">85%</p>
            <p>Would work again</p>
            <p>As Supervisor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
