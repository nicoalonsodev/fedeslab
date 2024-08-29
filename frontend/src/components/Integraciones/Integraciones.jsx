import React from "react";
import { FaWhatsapp, FaFacebook, FaTiktok } from "react-icons/fa";
import "./Integraciones.css";

const Integraciones = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="integraciones">
        <h1 className="text-4xl font-normal text-center mb-8">Mis Integraciones:</h1>
        <div className="flex justify-center space-x-8">
          <FaWhatsapp className="w-20 h-14 text-green-500 transform transition duration-300 hover:scale-125 hover:rotate-12" alt="whatsapp" />
          <FaFacebook className="w-20 h-14 text-blue-600 transform transition duration-300 hover:scale-125 hover:rotate-12" alt="meta" />
          <FaTiktok className="w-20 h-14 text-black transform transition duration-300 hover:scale-125 hover:rotate-12" alt="tiktok" />
        </div>
      </div>
    </div>
  );
};

export default Integraciones;


