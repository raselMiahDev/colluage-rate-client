import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../../../store/user.store";
const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuthStore();

  return (
    <div className="relative">
      {user?.email_verified ? (
        <div className="hidden md:flex items-center space-x-5">
          <h1>{user?.name}</h1>
          <img
            src={user?.picture}
            alt="User Avatar"
            className="rounded-full w-10 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 mt-48 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/profile">Profile</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/settings">Settings</Link>
                </li>
                <li
                  onClick={() => logout()}
                  className="px-4 py-2 hover:bg-gray-100 text-red-500 cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        null
      )}
    </div>
  );
};

export default UserMenu;
