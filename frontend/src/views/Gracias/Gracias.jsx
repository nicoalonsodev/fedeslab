import React from "react";
import Header from "../../components/Header/Header";
import { banner, fede } from "../../assets";
import Footer from "../../components/Footer/Footer";

const Gracias = () => {
  return (
    <div className="hanken-100 home-scrollbar">
      <Header />

      <div
        className="relative h-[90vh] lg:h-[80vh] flex items-start lg:items-center justify-center overflow-hidden mt-0 lg:mt-32"
        // style={{
        //   backgroundImage: `url(${banner})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <div className="relative w-full text-center text-white px-2 lg:px-52 mt-[90px] lg:-mt-40">
          <h1 className="text-xl lg:text-4xl montserrat-bold uppercase my-2 lg:my-3 text-gray-600 text-balance">
            <span className="">
              ¡Gracias por Agendar una Llamada con Fedeslab!
            </span>{" "}
          </h1>
          <p className="text-sm lg:text-2xl text-[#3a8139] leading-4 text-balance hanken-700-italic mb-4">
            Estamos emocionados de analizar tu caso y ver si podemos trabajar
            juntos para impulsar tu negocio online.
          </p>
          <div className="w-full flex justify-center items-center">
          <img src={fede} alt="Fede Pasquini" className="w-2/3 lg:w-1/4" />
          </div>

          {/* <p className="hidden lg:block text-sm lg:text-lg text-gray-600 text-balance hanken-600">
            Revisa tu bandeja de entrada para ver el link de la reunión. Si
            tienes alguna pregunta, no dudes en contactarnos. Estamos aquí para
            hacer este proceso lo más eficiente y fluido posible.
          </p> */}
          <p className="text-lg lg:text-2xl text-[#3a8139] text-balance montserrat-bold mt-2">
            ¡Nos vemos pronto y gracias por confiar en nosotros!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gracias;
