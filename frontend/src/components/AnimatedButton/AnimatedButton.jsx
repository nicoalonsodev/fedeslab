import React from "react";
import { SiCalendly } from "react-icons/si";
import "./AnimatedButton.css";

const AnimatedButton = ({ actualizarEstado }) => {
  const handleButtonClick = () => {
    actualizarEstado(true);
    // window.open("https://calendly.com/", "_blank"); // Redirección externa en una nueva pestaña
  };

  return (
    <div>
     
      <button
        onClick={handleButtonClick}
        className="w-full lg:w-100 animated-button text-xl border-[1px] border-[#398038] px-8 py-3 rounded-full"
      >
        <span className="text-lg lg:text-2xl  flex justify-center items-center gap-x-2">
          <SiCalendly /> QUIERO AGENDAR MI LLAMADA
        </span>
      </button>
    </div>
  );
};

export default AnimatedButton;
