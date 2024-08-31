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
    speed: 15000, 
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear", 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-4xl font-normal text-center mb-8">Mis Integraciones:</h1>
      <Slider {...settings}>
        <div className="transform transition-transform duration-300 hover:scale-90">
          <FaWhatsapp className="w-20 h-14 text-green-500" alt="whatsapp" />
        </div>
        <div className="transform transition-transform duration-300 hover:scale-90">
          <FaFacebook className="w-20 h-14 text-blue-600" alt="meta" />
        </div>
        <div className="transform transition-transform duration-300 hover:scale-90">
          <FaTiktok className="w-20 h-14 text-black" alt="tiktok" />
        </div>
        <div className="transform transition-transform duration-300 hover:scale-90">
          <FaInstagram className="w-20 h-14 text-pink-500" alt="instagram" />
        </div>
        <div className="transform transition-transform duration-300 hover:scale-90">
          <FaTwitter className="w-20 h-14 text-blue-400" alt="twitter" />
        </div>
        <div className="transform transition-transform duration-300 hover:scale-90">
          <FaYoutube className="w-20 h-14 text-red-500" alt="youtube" />
        </div>
        <div className="transform transition-transform duration-300 hover:scale-90">
          <FaLinkedin className="w-20 h-14 text-blue-700" alt="linkedin" />
        </div>
      </Slider>
    </div>
  );
};

export default Integraciones;

