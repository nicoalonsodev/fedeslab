import React, { useState, useEffect } from "react";
import { logo, logo_blanco } from "../../assets";
import { HiMenuAlt2 } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosContacts } from "react-icons/io";
import { GiThreeLeaves } from "react-icons/gi";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const [currentPage, setCurrentPage] = useState(currentPath);

  const handleNavClick = (page) => {
    // Redirigir a home si no estás en /
    if (currentPath !== "/") {
      setCurrentPage("/");
      setMenuOpen(false); // Cierra el menú si está abierto
      window.location.href = "/"; // Redirección a home
      return;
    }
    setCurrentPage(page);
    setMenuOpen(false); // Cierra el menú en navegación
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setNavbar(scrollY >= 80);
  };

  useEffect(() => {
    setCurrentPage(currentPath);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPath]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header
        className={`${
          navbar
            ? "header-bg lg:shadow-2xl h-[70px] lg:h-[70px]"
            : "header h-[70px] lg:h-[95px]"
        } text-gray-300 p-4 z-40 hanken-500 fixed w-full top-0 transition-all duration-500  ${
          menuOpen ? "" : "border-b-[1px] border-gray-900"
        }`}
      >
        <div className="mx-auto flex items-center justify-between lg:hidden z-30 px-6 bg-[#3a8139]">
          <div className="logo flex items-center space-x-4">
            <a href="/">
              <img src={logo_blanco} alt="Logo" style={{ width: "100px" }} />
            </a>
          </div>
          <HiMenuAlt2
            onClick={handleMenuToggle}
            className={`${
              menuOpen ? "rotate-180" : ""
            } duration-700 text-gray-50 text-4xl inline-block md:hidden cursor-pointer z-30 `}
          />
        </div>
        <div
          className="mx-auto flex items-center justify-between hidden lg:flex hanken-300"
          style={{ maxWidth: "1150px", height: navbar ? "50px" : "50px" }}
        >
          <div className="logo flex items-center space-x-4">
            <a href="/">
              <img
                src={navbar ? logo : logo_blanco}
                alt="Fedeslab - Logo"
                style={{
                  height: navbar ? "40px" : "40px",
                }}
              />
            </a>
          </div>
          <nav className="flex-grow flex justify-center space-x-10">
            <div className="text-md poppins-semibold space-x-10">
              <a
                href="#fedeslab"
                onClick={() => handleNavClick("/proyectos")}
                className={`${
                  currentPage === "/proyectos" ? "active" : "a-h"
                } ${navbar ? "text-gray-700" : ""}`}
              >
                Fedeslab
              </a>
              <a
                href="#propuesta"
                onClick={() => handleNavClick("/sobre-nosotros")}
                className={`${
                  currentPage === "/sobre-nosotros" ? "active" : "a-h"
                } ${navbar ? "text-gray-700" : ""}`}
              >
                Propuesta
              </a>
              <a
                href="#integraciones"
                onClick={() => handleNavClick("/novedades")}
                className={`${
                  currentPage === "/novedades" ? "active" : "a-h"
                } ${navbar ? "text-gray-700" : ""}`}
              >
                Integraciones
              </a>
              <a
                href="#blog"
                onClick={() => handleNavClick("/contacto")}
                className={`${
                  currentPage === "/contacto" ? "active" : "a-h"
                } ${navbar ? "text-gray-700" : ""}`}
              >
                Blog
              </a>
            </div>
            <div
              className={`${
                navbar ? "text-gray-700 border-gray-700" : ""
              } flex items-center border-[1px] hover:border-[#00314b] hover:text-[#00314b] duration-300 px-3 rounded-full`}
            >
              <a
                href="#contacto"
                className=" flex items-center gap-x-2 poppins-regular"
              >
                AGENDAR MI LLAMADA <IoIosContacts className="text-3xl" />
              </a>
            </div>
          </nav>
        </div>
      </header>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -340 }}
            animate={{ y: 0 }}
            exit={{ y: -340 }}
            transition={{ duration: 0.7 }}
            className="fixed top-0 left-0 text-left w-full h-96 px-4 mt-10 bg-[#3a8139] text-white hanken-300 z-20 flex flex-col items-start justify-center space-y-4"
          >
            <a href="/" onClick={() => handleNavClick("/")} className="text-lg">
              Fedeslab
            </a>
            <a
              href="#fedeslab"
              onClick={() => handleNavClick("/proyectos")}
              className="text-lg"
            >
              Propuesta
            </a>
            <a
              href="#propuesta"
              onClick={() => handleNavClick("/sobre-nosotros")}
              className="text-lg"
            >
              Nuestra Empresa
            </a>
            <a
              href="#blog"
              onClick={() => handleNavClick("/contacto")}
              className="text-lg"
            >
              Blog
            </a>

            <a
              href="#integraciones"
              onClick={() => handleNavClick("/novedades")}
              className="text-lg"
            >
              Integraciones
            </a>
            <div>
              <a
                href="/"
                className="tracking-widest poppins-regular bg-gray-50 hover:bg-gray-800 duration-300 text-[#3a8139] px-3 py-2 rounded-3xl flex items-center justify-center gap-x-2 "
              >
                AGENDAR MI LLAMADA <IoIosContacts className="text-3xl" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;

