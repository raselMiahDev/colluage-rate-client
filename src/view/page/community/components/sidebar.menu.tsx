import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoIosTrendingUp } from "react-icons/io";
import { RiUserCommunityLine } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
import { useState } from "react";

const SidebarMenu = () => {
  const [supportOpen, setSupportOpen] = useState(true);
  const [communityOpen, setCommunityOpen] = useState(true);
  const Items = [
    {
      id: 1,
      name: "Home",
      icon: <IoHomeOutline className="text-xl" />,
    },
    {
      id: 2,
      name: "My Office",
      icon: <HiOutlineOfficeBuilding className="text-xl" />,
    },
    {
      id: 3,
      name: "Trending",
      icon: <IoIosTrendingUp className="text-xl" />,
    },
    {
      id: 4,
      name: "All Community",
      icon: <RiUserCommunityLine className="text-xl" />,
    },
    {
      id: 5,
      name: "Explore",
      icon: <MdOutlineTravelExplore className="text-xl" />,
    },
  ];

  const menuItems = {
    support: [
      { title: "Mistreatment", img: "https://via.placeholder.com/30" },
      { title: "Advice Needed", img: "https://via.placeholder.com/30" },
      { title: "HR Concerns", img: "https://via.placeholder.com/30" },
    ],
    community: [
      { title: "Workplace Voices", img: "https://via.placeholder.com/30" },
      { title: "Office Confessions.", img: "https://via.placeholder.com/30" },
    ],
  };
  return (
    <div className="space-y-5  sticky top-24 h-[calc(100vh-3rem)] overflow-y-auto">
      <div className="bg-white border rounded-md p-4">
        <ul className="space-y-5 text-gray-700 text-sm font-semibold">
          {Items.map((item) => (
            <li
              key={item.id}
              className="flex items-center space-x-2 cursor-pointer hover:text-blue-500"
            >
              {item.icon}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Share & Support */}
      <div className="bg-white border rounded-md p-4">
        <div
          onClick={() => setSupportOpen(!supportOpen)}
          className="cursor-pointer font-semibold flex justify-between items-center"
        >
          <span>Share & Support</span>
          <span>{supportOpen ? "▾" : "▸"}</span>
        </div>
        {supportOpen && (
          <div className="mt-3 space-y-2">
            {menuItems.support.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer"
              >
                <img src={item.img} alt="" className="w-8 h-8 rounded-full" />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Communities */}
      <div className="bg-white border rounded-md p-4">
        <div
          onClick={() => setCommunityOpen(!communityOpen)}
          className="cursor-pointer font-semibold flex justify-between items-center"
        >
          <span>Communities</span>
          <span>{communityOpen ? "▾" : "▸"}</span>
        </div>
        {communityOpen && (
          <div className="mt-3 space-y-2">
            {menuItems.community.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer"
              >
                <img src={item.img} alt="" className="w-8 h-8 rounded-full" />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarMenu;
