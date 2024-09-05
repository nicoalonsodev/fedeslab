import React, { useRef } from "react";
import Slider from "react-slick";
import { FaWhatsapp, FaFacebook, FaTiktok, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Integraciones = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 20000,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    draggable: true,
    swipeToSlide: true,
    touchMove: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          speed: 20000,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          speed: 20000,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          speed: 23000,
          slidesToShow: 2.5,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-4xl font-semibold text-gray-700 text-center mb-8">
        Nuestras <span className="text-[#5AC758] hanken-700">Integraciones</span>
      </h1>
      <Slider {...settings}>
        <div className="transform transition-transform duration-300 hover:scale-90">
          <FaWhatsapp className="w-20 md:w-24 lg:w-32 h-16 md:h-20 lg:h-24 text-green-500" alt="whatsapp" />
        </div>
        <div className="transform transition-transform duration-300 hover:scale-90">
          <FaFacebook className="w-20 md:w-24 lg:w-32 h-16 md:h-20 lg:h-24 text-blue-600" alt="meta" />
        </div>
        <div className="transform transition-transform duration-300 hover:scale-90">
          <FaTiktok className="w-20 md:w-24 lg:w-32 h-16 md:h-20 lg:h-24 text-black" alt="tiktok" />
        </div>
        <div className="transform transition-transform duration-300 hover:scale-90">
          <FaInstagram className="w-20 md:w-24 lg:w-32 h-16 md:h-20 lg:h-24 text-pink-500" alt="instagram" />
        </div>
        <div className="transform transition-transform duration-300 hover:scale-90">
          <FaTwitter className="w-20 md:w-24 lg:w-32 h-16 md:h-20 lg:h-24 text-blue-400" alt="twitter" />
        </div>
        <div className="transform transition-transform duration-300 hover:scale-90">
          <FaYoutube className="w-20 md:w-24 lg:w-32 h-16 md:h-20 lg:h-24 text-red-500" alt="youtube" />
        </div>
        <div className="transform transition-transform duration-300 hover:scale-90">
          <FaLinkedin className="w-20 md:w-24 lg:w-32 h-16 md:h-20 lg:h-24 text-blue-700" alt="linkedin" />
        </div>
        <div className="transform transition-transform duration-300 hover:scale-90">
          <FaLinkedin className="w-20 md:w-24 lg:w-32 h-16 md:h-20 lg:h-24 text-blue-700" alt="linkedin" />
        </div>
      </Slider>
    </div>
  );
};

export default Integraciones;
