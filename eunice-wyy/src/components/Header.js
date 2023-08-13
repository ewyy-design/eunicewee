import React from "react";

import WebsiteLogo from "../assets/website-logo.png";
import CV from "../assets/eunice-resume.pdf";

// Loop Animations
import { Player } from "@lottiefiles/react-lottie-player";

// React Icon
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <header className="bg-prussianblue text-center pb-5">
      <div className="container">
        <div className="flex justify-center">
          <img src={WebsiteLogo} alt="website-logo" width="300" height="300" />
        </div>
        <div className="pb-20">
          <em className="text-white text-8xl">Hello, </em>{" "}
          <span className="text-persiangreen text-8xl">I am </span>{" "}
          <div className="player-wrapper relative inline-block space-x-4 space-y-3">
            <Player
              src="https://lottie.host/39f18ee9-387c-4042-b7e6-9e08578eec98/P2m0BeTux4.json"
              className="player"
              color="white"
              background="transparent"
              speed="1"
              loop
              autoplay
            />
            <span className="text-persiangreen text-8xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Eunice!
            </span>
          </div>
        </div>
        <div className="pb-20">
          <p className="text-3xl text-white">
            I'm a software engineer with{" "}
            <span className="text-bittersweet">a passion for data</span> and a{" "}
            <span className="text-bittersweet">frontend design aficionado</span>
            , merging the power of data engineering with captivating user
            experiences.
          </p>
        </div>
        <div>
          <a href={CV} target="__blank" className="text-persiangreen text-2xl">
            <em>Download CV</em>
          </a>
          <Player
            src="https://lottie.host/490d5227-9ad2-4d9e-8197-d02e7f2609dc/CJuNilNsbu.json"
            style={{ width: 200, height: 50 }}
            className="player line transform -translate-y-1/4"
            background="transparent"
            speed="1"
            loop
            autoplay
          />
        </div>

        {/* SIDE BAR NAVIGATION */}
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
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
