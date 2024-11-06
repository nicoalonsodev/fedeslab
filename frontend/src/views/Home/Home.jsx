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
      id="fedeslab"
        className="relative h-[80vh] lg:h-screen flex items-start lg:items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative w-full z-10 text-center text-white px-2 lg:px-32 mt-[90px] lg:mt-16">
          <h1 className="text-2xl lg:text-4xl montserrat-bold uppercase mt-4 mb-6 text-gray-600 text-balance">
            <span className="text-[#3a8139] ">Aumenta tus ventas</span> online
            con estrategia de{" "}
            <span className="text-[#3a8139] ">contenido y publicidad</span>.
          </h1>

          <VideoWistia />
        </div>
      </div>

      <div id="propuesta" className="overflow-hidden">
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
