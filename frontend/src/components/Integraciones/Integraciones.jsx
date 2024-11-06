import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { google, meta, tableau, doppler, tiktok } from "../../assets";

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
    <div id="integraciones" className="bg-gray-100 p-8">
      <h1 className="text-4xl font-semibold text-gray-700 text-center mb-8">
        Mis <span className="text-[#5AC758] hanken-700">Integraciones</span>
      </h1>
      <Slider {...settings} className="">
        <div className="transform transition-transform duration-300 hover:scale-105">
          <img src={google} alt="Google" className=" w-16 md:w-20 lg:w-24 py-4  " />
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105">
          <img src={meta} alt="Meta" className=" w-16 md:w-20 lg:w-24 py-4  " />
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105">
          <img src={tableau} alt="Tableau" className=" w-16 md:w-20 lg:w-24 py-4  " />
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105">
          <img src={doppler} alt="Doppler" className=" w-16 md:w-20 lg:w-24 py-4  " />
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105">
          <img src={tiktok} alt="TikTok" className=" w-16 md:w-20 lg:w-24 py-4  " />
        </div>
      </Slider>
    </div>
  );
};

export default Integraciones;
