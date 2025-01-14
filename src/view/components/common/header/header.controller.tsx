import { useEffect, useState } from "react";
import { RouteUrl } from "../../../router/url";

export const useHeaderController = () => {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const routes = [
    { id: "1", name: "Community", path: RouteUrl.COMMUNITY },
    { id: "2", name: "Companies", path: RouteUrl.COMPANIES },
  ];

  return { isScrolled, routes };
};
