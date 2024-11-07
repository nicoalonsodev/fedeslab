import React from "react";
import { logo_blanco } from "../../assets";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#3a8139] text-white py-8">
      <div className="flex items-center justify-center">
        <img src={logo_blanco} alt="Logo" className="w-[150px]" />
      </div>
      <div className="max-w-7xl mt-3 mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <a
          href="https://www.instagram.com/fedeslab/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block  text-[#00314b] font-poppins py-3 px-3 lg:px-6 rounded-full text-sm transition hover:scale-110 duration-300 items-center"
        >
          <FaInstagram size={30} className="" />
        </a>
        <a
          href="https://www.linkedin.com/in/federico-pasquini-64007a285/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block  text-[#00314b] font-poppins py-3 px-3 lg:px-6 rounded-full text-sm transition hover:scale-110 duration-300 items-center"
        >
          <FaLinkedin size={30} className="" />
        </a>
      </div>
      <div className="text-center hanken-300 mt-3 text-sm text-gray-200">
        © 2024 Fedeslab. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
