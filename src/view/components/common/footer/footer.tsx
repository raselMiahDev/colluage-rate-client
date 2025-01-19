import { Link } from "react-router-dom";
import StartYourSearch from "../../../page/home/start-your-search";
import SocialMedia from "../social-media";
export default function Footer() {
  return (
    <footer className="text-gray-700 pb-8">
      <div className="">
        {/* Call to Action */}
        <StartYourSearch />
        {/* Footer Links */}
        <div className="block md:flex gap-8 px-5 md:px-40 border-y border-gray-200 py-12">
          {/* Brand Section */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-5">Meet My Colleague</h3>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              molitia, molestiae quas vel.
            </p>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-1/3">
            <h4 className="font-bold mb-2">Meet My Colleague</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="hover:text-blue-500 text-sm">
                  Help
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-500 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-500 text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/guides" className="hover:text-blue-500 text-sm">
                  Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Policy Section */}
          <div className="w-full md:w-1/3">
            <h4 className="font-bold mb-2">Policy</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="hover:text-blue-500 text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-blue-500 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/copyright" className="hover:text-blue-500 text-sm">
                  Copyright Policy
                </Link>
              </li>
              <li>
                <Link to="/guidelines" className="hover:text-blue-500 text-sm">
                  Site Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Work With Us Section */}
          <div className="w-full md:w-1/3">
            <h4 className="font-bold mb-2">Work With Us</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/ca-notice" className="hover:text-blue-500 text-sm">
                  CA Notice at Collection
                </Link>
              </li>
              <li>
                <Link to="/do-not-sell" className="hover:text-blue-500 text-sm">
                  CA Do not sell
                </Link>
              </li>
              <li>
                <Link to="/advertisers" className="hover:text-blue-500 text-sm">
                  Advertisers
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-blue-500 text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center pt-8">
          <SocialMedia />
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-500 mt-6">
          © 2024 Meet my colleague. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
