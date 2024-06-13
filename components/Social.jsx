import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/mateusmaiia" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/mateus-maia-690218273/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/matteusmaia_/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
