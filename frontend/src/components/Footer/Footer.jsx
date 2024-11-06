import React from "react";
import { logo_blanco } from "../../assets"; 

const Footer = () => {
  return (
    <footer className="bg-[#5AC758] text-white py-8">
         <div className="flex items-center justify-center">
          <img src={logo_blanco} alt="Logo" className="w-[150px]" />
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
       
       
      </div>
      <div className="text-center hanken-300 mt-8 text-sm text-gray-200">
        © 2024 Fedeslab. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
