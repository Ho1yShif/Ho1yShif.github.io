import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn, FaDonate } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const SocialMediaData = [
  {
    icon: <div className="p-2"><FaLinkedinIn /></div>,
    name: "LinkedIn",
    color: "black",
    link: "https://www.linkedin.com/in/shifra-isaacs/",
  },
  {
    icon: <div className="p-2"><BsGithub /></div>,
    name: "GitHub",
    color: "black",
    link: "https://github.com/Ho1yShif/",
  },
  {
    icon: <div className="p-2"><FaXTwitter /></div>,
    name: "X",
    color: "black",
    link: "https://twitter.com/holyshif?lang=en",
  },
  {
    icon: <div className="p-2">< FaDonate /></div>,
    name: "Donate",
    color: "black",
    link: "https://www.paypal.com/donate/?business=L8U6544C9D2ML&no_recurring=0&item_name=Creating+informative+content+to+help+students+and+early-career+tech+professionals+achieve+their+fullest+potential&currency_code=USD",
  },
];