import React from "react"
import CV from "../assets/sample-resume.pdf"
import WebsiteLogo from "../assets/website-logo.png"

// Loop Animations
import { Player } from "@lottiefiles/react-lottie-player"

// React Icon
import { BsLinkedin, BsGithub } from "react-icons/bs"

const Home = () => {
  return (
    <div className="home">
      <nav className="nav-font flex justify-between items-center ">
        <div className="flex items-center">
          <img src={WebsiteLogo} alt="website-logo" width="300" height="300" />
        </div>

        <div className="nav-right flex space-x-4 text-2xl">
          <a href="#about">
            <span className="highlight-red">01.</span> About
          </a>
          <a href="#experience">
            <span className="highlight-red">02.</span> Experiences
          </a>
          <a href="work">
            <span className="highlight-red">03.</span> Work
          </a>
          <a href="#contact">
            <span className="highlight-red">04.</span> Contact
          </a>
        </div>
      </nav>

      <header className="text-center pb-10">
        <h5 className="text-8xl pb-10 relative inline-block">
          <div className="inline-block pr-10 ">
            <em>Hello</em>, <span className="highlight-green">I am</span>
          </div>

          <div className="player-wrapper relative inline-block space-x-4 space-y-3">
            <Player src="https://lottie.host/bdb9ff1e-45cb-4b9b-bc19-464f578070a2/JX15lyKFtO.json" className="player" background="transparent" speed="1" loop autoplay />
            <span className="highlight-green text-8xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Eunice!</span>
          </div>
        </h5>

        <h2 className="text-2xl pb-20 header-sub ml-48 mr-48">
          I'm a software engineer with <span className="highlight-red">a passion for data</span> and a <span className="highlight-red">frontend design aficionado</span>, merging the power of data engineering with captivating user experiences.
        </h2>
        <a href={CV} target="__blank" className="highlight-green text-2xl">
          <em>Hire me</em>
        </a>
        <Player src="https://lottie.host/490d5227-9ad2-4d9e-8197-d02e7f2609dc/CJuNilNsbu.json" className="player line transform -translate-y-1/4" background="transparent" speed="1" loop autoplay />
      </header>

      <div className="header__socials">
        <a href="https://www.linkedin.com/in/eunice-wee-95159515b/" target="__blank">
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
    </div>
  )
}

export default Home
