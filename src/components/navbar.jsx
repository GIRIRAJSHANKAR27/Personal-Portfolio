import logo from "../assets/logo_4.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a
          href="https://your-website.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="mx-2 w-10 " src={logo} alt="logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/giriraj-shankar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/GIRIRAJSHANKAR27"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/shankar_giriraj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://www.instagram.com/shankargiriraj27/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
