import React from "react";
import CV from "../assets/sample-resume.pdf";
import WebsiteLogo from "../assets/website-logo.png";

// Loop Animations
import { Player } from "@lottiefiles/react-lottie-player";

// React Icon
import { BsLinkedin, BsGithub } from "react-icons/bs";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineMessage,
} from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

const Home = () => {
  return (
    // <div></div>
    <section className="home">
      <div className="nav-font flex justify-center">
        <nav className="nav-right flex space-x-4 text-2xl">
          <a href="#">
            <AiOutlineHome />
          </a>
          <a href="#about">
            <AiOutlineUser />
          </a>
          <a href="#experience">
            <AiOutlineBook />
          </a>
          <a href="#work">
            <CgWebsite />
          </a>
          <a href="#contact">
            <AiOutlineMessage />
          </a>
        </nav>
      </div>

      <div className="header__socials">
        <a
          href="https://www.linkedin.com/in/eunice-wee-95159515b/"
          target="__blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/ewyy-design" target="__blank">
          <BsGithub />
        </a>
      </div>

      <div className="header__contact ">
        <a href="mailto:eunice_wyy@hotmail.com">
          <em>eunice_wyy@hotmail.com</em>
        </a>
      </div>
    </section>
  );
};

export default Home;
