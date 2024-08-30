import React from "react";
import Slider from "react-slick";
import { FaWhatsapp, FaFacebook, FaTiktok, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Integraciones = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
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
    <div className="bg-gray-100 p-14"> {/* Aumenté el padding para evitar cortes */}
      <h1 className="text-4xl font-normal text-center mb-8">Mis Integraciones:</h1>
      <Slider {...settings}>
        <div className="px-4"> {/* Padding para evitar que se corten al expandirse */}
          <FaWhatsapp className="w-20 h-14 text-green-500 transform transition-transform duration-300 hover:scale-90" alt="whatsapp" />
        </div>
        <div className="px-4">
          <FaFacebook className="w-20 h-14 text-blue-600 transform transition-transform duration-300 hover:scale-90" alt="meta" />
        </div>
        <div className="px-4">
          <FaTiktok className="w-20 h-14 text-black transform transition-transform duration-300 hover:scale-90" alt="tiktok" />
        </div>
        <div className="px-4">
          <FaInstagram className="w-20 h-14 text-pink-500 transform transition-transform duration-300 hover:scale-90" alt="instagram" />
        </div>
        <div className="px-4">
          <FaTwitter className="w-20 h-14 text-blue-400 transform transition-transform duration-300 hover:scale-90" alt="twitter" />
        </div>
        <div className="px-4">
          <FaYoutube className="w-20 h-14 text-red-500 transform transition-transform duration-300 hover:scale-90" alt="youtube" />
        </div>
        <div className="px-4">
          <FaLinkedin className="w-20 h-14 text-blue-700 transform transition-transform duration-300 hover:scale-90" alt="linkedin" />
        </div>
      </Slider>
    </div>
  );
};

export default Integraciones;



