import React from "react";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import "./Video.css";

const VideoWistia = ({}) => {
  const videoUrl = "https://fast.wistia.net/embed/iframe/pmkgntlrt0";

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
      <p className="mb-4 lg:mb-4 mt-6 lg:mt-0 text-gray-100 text-md italic text-balance font-normal">
      ❛ Si estás cansado de contratar agencias de marketing que no se
            comprometen con tu marca, entonces estás en el lugar correcto. Con
            una atención personalizada y una estrategia basada en datos voy a
            aumentar tus ventas online en menos de 3 meses.❜
          </p>
      <div className="w-full flex justify-center">
        <AnimatedButton />
      </div>
    </div>
  );
};

export default VideoWistia;
