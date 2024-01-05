import React from "react";
import Button from "./Button";
import Image from "next/image";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="container">
      <Image src={logo} alt="logo" />
      <Button />
    </div>
  );
};

export default Navbar;
