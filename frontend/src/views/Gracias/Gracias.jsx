import React from "react";
import Header from "../../components/Header/Header";
import { banner } from "../../assets";
import Footer from "../../components/Footer/Footer";

const Gracias = () => {
  return (
    <div className="hanken-100 home-scrollbar">
      <Header />

      <div
       
        className="relative h-[90vh] lg:h-screen flex items-start lg:items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative w-full z-10 text-center text-white px-2 lg:px-52 mt-[90px] lg:-mt-40">
          <h1 className="text-xl lg:text-4xl montserrat-bold uppercase my-2 lg:my-3 text-gray-600 text-balance">
            <span className="">
              ¡Gracias por Agendar una Llamada con Fedeslab!
            </span>{" "}
          </h1>
          <p className="text-md lg:text-2xl text-[#3a8139]  text-balance hanken-700 mb-4">
            Estamos emocionados de analizar tu caso y ver si podemos trabajar
            juntos para impulsar tu negocio online.
          </p>
          <p className="text-sm lg:text-lg text-gray-600 text-balance hanken-600">
            Revisa tu bandeja de entrada para ver el link de la reunión. Si
            tienes alguna pregunta, no dudes en contactarnos. Estamos aquí para
            hacer este proceso lo más eficiente y fluido posible.
          </p>
          <p className="text-sm lg:text-2xl text-[#3a8139] text-balance montserrat-bold mt-2">
            ¡Nos vemos pronto y gracias por confiar en nosotros!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gracias;
