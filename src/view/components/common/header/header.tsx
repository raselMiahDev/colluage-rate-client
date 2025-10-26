import { Link, NavLink } from "react-router-dom";
import Logo from "../../../../assets/logo.png";
import { useHeaderController } from "./header.controller";
import { useState } from "react";
import { useAuthStore } from "../../../../store/user.store";

import UserMenu from "./user-menu";
import { RouteUrl } from "../../../router/url";

export default function HeaderOne() {
  const { user } = useAuthStore();
  const { isScrolled, routes } = useHeaderController();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header
      className={` transition-all duration-300 ease-in-out z-50 ${
        isScrolled ? "fixed top-0 left-0 w-full bg-white shadow-lg" : "relative"
      }`}
    >
      <div className=" flex items-center justify-between px-5 md:px-40 py-3 dark:border-gray-700">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div>
            <img src={Logo} alt="Logo" className="h-7 w-16 md:h-7 md:w-25" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-7">
          {routes.map((route) => (
            <NavLink
              key={route.id}
              to={route.path}
              className={({ isActive }) =>
                isActive
                  ? "rounded-full border px-4 py-2 footer-link"
                  : "text-md py-2 hover:text-gray-300 footer-link"
              }
            >
              {route.name}
            </NavLink>
          ))}
        </nav>

        <div>
          <UserMenu />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-20 w-full bg-white transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100 shadow-lg"
            : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <nav className="flex flex-col space-y-4 p-4 items-center">
          {user?.email_verified === true ? (
            <div>
              <img src={user?.picture} alt="" />
            </div>
          ) : (
            <ul>
              {routes.map((route) => (
                <li className="py-3">
                  <NavLink
                    key={route.id}
                    to={route.path}
                    className={({ isActive }) =>
                      isActive
                        ? "rounded-full bg-blue-400 text-white px-4 py-2"
                        : "border px-4 text-md py-2 rounded-full hover:text-gray-300"
                    }
                    onClick={toggleMenu} // Close the menu on link click
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}

              <div className="flex items-center space-x-5 md:flex">
                <Link to={RouteUrl.LOGIN}>Log In</Link>
                <Link
                  to={RouteUrl.SIGN_UP}
                  className="bg-blue-600 hover:bg-blue-700 p-1 md:py-2 md:px-5 rounded md:rounded-lg text-white"
                >
                  Sign Up
                </Link>
              </div>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}
