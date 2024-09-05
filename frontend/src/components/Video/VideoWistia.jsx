import React, { useState, useRef, useEffect } from "react";
// import Registro from "../Registro/Registro";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
// import gif from "../../assets/gifSound.gif";
import { useLocation } from "react-router-dom";
import "./Video.css";

const VideoWistia = ({}) => {
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const location = useLocation();
  const isRegistered = new URLSearchParams(location.search).get("registered") === "true";
  const videoRef = useRef(null);

  const videoUrl = "https://fast.wistia.net/embed/iframe/pmkgntlrt0";

  useEffect(() => {
    if (videoRef.current) {
      const command = isRegistered ? 'unMute' : 'mute';
      videoRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: command, args: [] }),
        '*'
      );
      videoRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
        '*'
      );

      // Establecer showButton en true después de 30 segundos
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 30000); // 300000 ms = 5 minutos
      // Limpieza del temporizador cuando el componente se desmonte o cambie el estado relevante
      return () => clearTimeout(timer);
    }
  }, [isRegistered]);

  const actualizarEstadoPadre = (estado) => {
    setShowForm(false);
    if (estado && !formSubmitted) {
      setFormSubmitted(true);
      if (videoRef.current) {
        videoRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'unMute', args: [] }),
          '*'
        );
        videoRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
          '*'
        );
        setShowOverlay(false);
      }
    }
  };

  const handleOverlayClick = () => {
    setShowOverlay(false);
    actualizarEstadoPadre(true);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center  px-0 lg:px-32">
      <div className="w-full lg:w-2/3 h-full flex flex-col items-center px-1 lg:px-6 py-1 lg:py-4 bg-gray-800 rounded-2xl mb-4 border-gray-800 border-2 relative">
        <div className="aspect-w-16 aspect-h-9 w-full">
          <iframe
            ref={videoRef}
            className="w-full h-full rounded-lg shadow-lg"
            src={videoUrl}
            allow="autoplay"
            frameBorder="0"
            title="Wistia Video"
            allowFullScreen
            onLoad={() => {
              const command = isRegistered ? 'unMute' : 'mute';
              videoRef.current.contentWindow.postMessage(
                JSON.stringify({ event: 'command', func: command, args: [] }),
                '*'
              );
              videoRef.current.contentWindow.postMessage(
                JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
                '*'
              );
            }}
          ></iframe>
        </div>
       
      </div>
      <div className="w-full flex justify-center">
         <AnimatedButton  />
      </div>
      
    </div>
  );
};

export default VideoWistia;
