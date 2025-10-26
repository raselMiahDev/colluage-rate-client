import { CiBookmark } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import SocialMedia from "../../../components/common/social-media";
import EditProfileForm from "./edit-profile-form";
import { useAuthStore } from "../../../../store/user.store";

const MyProfile = () => {
  const { user } = useAuthStore();
  return (
    <div className="bg-white gap-7 border rounded-lg p-6">
      <div className="grid md:grid-cols-5">
        <div className="col-span-1">
          <img src={user?.picture} alt="profile" width={130} className="rounded-full p-1 border-2 border-[#006BFF]"/>
        </div>
        <div className="space-y-4 col-span-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl font-bold">{user?.name}</h2>
              <CiBookmark size={24} color="#4B465C" />
            </div>
            <div className="p-2 border rounded-lg">
              <FaEdit />
            </div>
          </div>
          <div>
            <p className="text-gray-600">
              Works at <span className="font-bold">Codex IT</span> as Manager
            </p>
            <p className="text-gray-600">
              Worked at <span className="font-bold">Mahasagor IT Solution</span>{" "}
              as Frontend Developer
            </p>
          </div>
          <div>
            <SocialMedia />
          </div>
          {/* Edit Profile form  */}
          <div>
            <EditProfileForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
