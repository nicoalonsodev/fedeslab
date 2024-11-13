import React from "react";
import Header from "../../components/Header/Header";
import { banner } from "../../assets";
import Footer from "../../components/Footer/Footer";




const Gracias = () => {
  return (
    <div className="hanken-100 home-scrollbar">
      <Header />

      <div
      id="fedeslab"
        className="relative h-[90vh] lg:h-screen flex items-start lg:items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative w-full z-10 text-center text-white px-2 lg:px-32 mt-[90px] lg:mt-16">
          <h1 className="text-xl lg:text-4xl montserrat-bold uppercase mt-4 mb-6 text-gray-600 text-balance">
            <span className="text-[#3a8139] ">gracias por agendar tu llamada! </span> <br /> Espero estes muy bien
       
          </h1>

       
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gracias;
