import React, { useState } from "react";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import "./Video.css";
import Registro from "../Registro/Registro";
import AnswerNo from "../AnswerNo/AnswerNo";
const VideoWistia = ({}) => {
  const [showForm, setShowform] = useState(false);
  const [showRejection, setShowRejection] = useState(false);
  const videoUrl = "https://fast.wistia.net/embed/iframe/5lx6fgn9l7";

  const actualizarEstadoPadre = (estado) => {
    setShowform(estado);
  };
  const actualizarEstadoNo = (estado) => {
    setShowRejection(estado);
  };

  const handleClick = (click) => {
    setShowform(click);
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center  px-0 lg:px-32">
      <div className="w-full lg:w-[60%] h-full flex flex-col items-center px-1 lg:px-6 py-1 lg:py-4 bg-gray-800 rounded-2xl mb-4 border-gray-800 border-2 relative">
        <div className="aspect-w-16 aspect-h-9 w-full">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src={videoUrl}
            allow="autoplay"
            frameBorder="0"
            title="Wistia Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <p className="lg:mb-4 mt-8 lg:mt-0 text-gray-100 text-xs lg:text-md italic text-balance font-normal">
        ❛ Si estás cansado de contratar agencias de marketing que no se
        comprometen con tu marca, entonces estás en el lugar correcto. Con una
        atención personalizada y una estrategia basada en datos voy a aumentar
        tus ventas online en menos de 3 meses.❜
      </p>
      <div className="w-full flex justify-center">
        <AnimatedButton actualizarEstado={actualizarEstadoPadre} />
      </div>
      {showForm && (
        <>
          <div
            className="fixed inset-0 bg-gray-800 opacity-50 z-40"
            onClick={() => handleClick(false)}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Registro actualizarEstado={actualizarEstadoPadre} actualizarEstadoAnswer={actualizarEstadoNo} />
            </div>
          </div>
        </>
      )}
      {showRejection && (
        <>
          <div
            className="fixed inset-0 bg-gray-800 opacity-50 z-40"
            onClick={() => actualizarEstadoNo(false)}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <AnswerNo actualizarEstado={actualizarEstadoNo} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoWistia;
