import React from "react";
import Slider from "react-slick";
import { FaWhatsapp, FaFacebook, FaTiktok, FaInstagram, FaLinkedin } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Integraciones = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 8000, // Velocidad ajustada para evitar bugs
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear", // Movimiento continuo
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          speed: 10000, // Velocidad más lenta en pantallas grandes
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          speed: 12000, // Velocidad ajustada para pantallas medianas
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          speed: 10000, // Velocidad ajustada para pantallas pequeñas
          slidesToShow: 2.5, // Mostrar parcialmente el tercer icono
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-4xl font-semibold text-gray-700 text-center mb-8">
        Mis <span className="text-[#5AC758] hanken-700">Integraciones</span>
      </h1>
      <Slider {...settings}>
        <div className="transform transition-transform duration-300 hover:scale-105">
          <FaWhatsapp className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 text-green-500" />
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105">
          <FaFacebook className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 text-blue-600" />
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105">
          <FaTiktok className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 text-black" />
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105">
          <FaInstagram className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 text-pink-500" />
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105">
          <FaLinkedin className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 text-blue-700" />
        </div>
      </Slider>
    </div>
  );
};

export default Integraciones;
