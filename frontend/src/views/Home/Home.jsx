import React, { Suspense, lazy } from "react";
import Header from "../../components/Header/Header";
import VideoWistia from "../../components/Video/VideoWistia";
import { banner } from "../../assets";
import Footer from "../../components/Footer/Footer";
import AboutUs from "../../components/AboutUs/AboutUs";

// Lazy load de componentes
const Integraciones = lazy(() =>
  import("../../components/Integraciones/Integraciones")
);
const Testimonios = lazy(() =>
  import("../../components/Testimonios/Testimonios")
);
const NewsCards = lazy(() => import("../../components/NewsCards/NewsCards"));

const Home = () => {
  return (
    <div className="hanken-100 home-scrollbar">
      <Header />

      <div
        className="relative h-screen flex items-start lg:items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative w-full z-10 text-center text-white px-2 lg:px-32 mt-20 lg:mt-16">
          <h1 className="text-4xl lg:text-5xl hanken-700 mt-4 mb-6 text-gray-700 text-balance">
            Aumenta tus ventas online con estrategia de contenido y publicidad.{" "}
          </h1>

          <VideoWistia />
          <p className=" text-black text-lg italic text-balance font-normal">
        Si estás cansado de contratar agencias de marketing que no se comprometen con tu marca, entonces estás en el lugar correcto. Con una atención personalizada y una estrategia basada en datos voy a aumentar tus ventas online en menos de 3 meses.
      </p>
        </div>
      </div>

      <div className="overflow-hidden">
        <AboutUs />
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Integraciones />
        <Testimonios />
        <NewsCards />
      </Suspense>

      <Footer />
    </div>
  );
};

export default Home;
