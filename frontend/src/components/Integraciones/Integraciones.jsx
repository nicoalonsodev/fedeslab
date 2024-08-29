import React from "react";
import { FaWhatsapp, FaFacebook, FaTiktok, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

const Integraciones = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-4xl font-normal text-center mb-8">Mis Integraciones:</h1>
      <div className="overflow-x-hidden">
        <div className="flex animate-scroll space-x-8 py-4 w-max">
          <FaWhatsapp className="w-20 h-14 text-green-500 transform transition duration-300 hover:scale-125 hover:rotate-12" alt="whatsapp" />
          <FaFacebook className="w-20 h-14 text-blue-600 transform transition duration-300 hover:scale-125 hover:rotate-12" alt="meta" />
          <FaTiktok className="w-20 h-14 text-black transform transition duration-300 hover:scale-125 hover:rotate-12" alt="tiktok" />
          <FaInstagram className="w-20 h-14 text-pink-500 transform transition duration-300 hover:scale-125 hover:rotate-12" alt="instagram" />
          <FaTwitter className="w-20 h-14 text-blue-400 transform transition duration-300 hover:scale-125 hover:rotate-12" alt="twitter" />
          <FaYoutube className="w-20 h-14 text-red-500 transform transition duration-300 hover:scale-125 hover:rotate-12" alt="youtube" />
          <FaLinkedin className="w-20 h-14 text-blue-700 transform transition duration-300 hover:scale-125 hover:rotate-12" alt="linkedin" />
        </div>
      </div>
    </div>
  );
};

export default Integraciones;

