import React from "react";

// React Icon
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { BiBook } from "react-icons/bi";

const Nav = () => {
  return (
    <nav>
      {" "}
      <a href="#home">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <BiBook />
      </a>
      <a href="#work">
        <CgWebsite />
      </a>
      <a href="#contact">
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
