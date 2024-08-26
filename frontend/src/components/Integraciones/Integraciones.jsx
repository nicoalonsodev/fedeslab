import React from "react";
import "./Integraciones.css";
import whatsapplogo from "../../assets/whatsapplogo.png";
import metalogo from "../../assets/metalogo.png";
import tiktoklogo from "../../assets/tiktoklogo.png";

const Integraciones = () => {
  return (
    <div>
      <div className="integraciones">
        <h1 className="text-4xl font-bold text-center mb-8">Integraciones</h1>
        <div className="flex justify-center space-x-8">
          <img src={whatsapplogo} alt="whatsapp" className="h-14" />
          <img src={metalogo} alt="whatsapp" className="h-14" />
          <img src={tiktoklogo} alt="whatsapp" className="h-14" />
        </div>
      </div>
    </div>
  );
};

export default Integraciones;
