import React from "react";
import { logo } from "../../assets"; // Asegúrate de importar tu logo correctamente

const Footer = () => {
  return (
    <footer className="bg-[#5AC758] text-white py-8">
         <div className="flex items-center justify-center">
          <img src={logo} alt="Logo" className="w-[100px]" />
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
       
        {/* <nav className="space-y-2 text-md hanken-500">
          <a href="#bodyline" className="block hover:text-gray-400">
            Fedeslab
          </a>
          <a href="#irene" className="block hover:text-gray-400">
            Irene
          </a>
          <a href="#contact" className="block hover:text-gray-400">
            Contacto
          </a>
          <a href="#community" className="block hover:text-gray-400">
            Comunidad
          </a>
          <a href="#therapys" className="block hover:text-gray-400">
            Ver todas las terapias
          </a>
        </nav> */}
      </div>
      <div className="text-center hanken-300 mt-8 text-sm text-gray-200">
        © 2024 Fedeslab. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
