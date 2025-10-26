import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import ContainerSectionWrapper from "../layout/container-section-wrapper.comp";
const SocialMedia = () => {
  const socialMedia = [
    {
      id: "1",
      name: "Facebook",
      icon: <FaFacebook />,
      link: "www.facebook.com",
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
      id: "6",
      name: "Youtube",
      icon: <FaYoutube />,
      link: "www.youtube.com",
    },
  ];
  return (
          <div className="flex items-center space-x-1 md:space-x-3 px-6 md:px-0">
      {socialMedia.map((social) => (
        <a
          href={social.link}
          key={social.id}
          className="text-gray-800 hover:bg-[#006BFF] hover:text-white transition ease-in-out duration-300 hover:border-white text-xl md:text-2xl border border-gray-600 rounded-md p-1 md:p-2"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
