import { useState } from "react";
import { Link } from "react-router-dom";
import { RouteUrl } from "../../../router/url";
import { useAuthStore } from "../../../../store/user.store";
const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthStore();

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
                <li className="px-4 py-2 hover:bg-gray-100 text-red-500 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <>
          <p className="text-red-500">Please verify your email</p>
          <div className="flex items-center space-x-5 md:flex">
            <Link to={RouteUrl.LOGIN}>Log In</Link>
            <Link
              to={RouteUrl.SIGN_UP}
              className="bg-blue-600 hover:bg-blue-700 p-1 md:py-2 md:px-5 rounded md:rounded-lg text-white"
            >
              Sign Up
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default UserMenu;
