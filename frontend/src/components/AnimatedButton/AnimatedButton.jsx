import React from "react";
import { useNavigate } from 'react-router-dom';
import "./AnimatedButton.css";
import { SiCalendly } from "react-icons/si";

const AnimatedButton = ({cta}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 100,
      behavior: "smooth", // Desplazamiento suave
    });
  };

  return (
    <button
      onClick={cta ? scrollToTop : handleButtonClick}
      className="w-full lg:w-2/4 animated-button text-xl border-[1px] border-[#398038]"
    >
      <span className="text-lg lg:text-2xl flex justify-center items-center gap-x-2"><SiCalendly />AGENDA TU LLAMADA</span>
      {/* <span className="subtext text-sm lg:text-lg text-balance">
        Y comienza a implementar este nuevo modelo de negocio ahora
      </span> */}
    </button>
  );
};

export default AnimatedButton;
