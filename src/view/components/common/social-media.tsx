import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
const SocialMedia = () => {
  const socialMedia = [
    {
      id: "1",
      name: "Facebook",
      icon: <FaFacebook />,
      link: "www.facebook.com",
    },
    {
      id: "2",
      name: "Instagram",
      icon: <CiInstagram />,
      link: "www.instagram.com",
    },
    {
      id: "3",
      name: "Linkedin",
      icon: <FaLinkedin />,
      link: "www.linkedin.com",
    },
    {
      id: "4",
      name: "Twitter",
      icon: <FaTwitter />,
      link: "www.twitter.com",
    },
    {
      id: "5",
      name: "Tiktok",
      icon: <IoLogoTiktok />,
      link: "www.tiktok.com",
    },
    {
      id: "6",
      name: "Youtube",
      icon: <FaYoutube />,
      link: "www.youtube.com",
    },
  ];
  return (
    <div className="flex space-x-5">
      {socialMedia.map((social) => (
        <a
          href={social.link}
          key={social.id}
          className="text-gray-800 hover:bg-[#006BFF] hover:text-white transition ease-in-out duration-300 hover:border-white text-2xl border border-gray-600 rounded-md p-2"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
