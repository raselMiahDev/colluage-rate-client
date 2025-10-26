import { socialMedia } from "../../../constants/socialMedia";
const SocialMedia = () => {
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
