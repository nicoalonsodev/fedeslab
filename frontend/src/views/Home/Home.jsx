import React, { Suspense, lazy } from "react"; // Asegúrate de importar 'Suspense' y 'lazy' aquí
import Header from "../../components/Header/Header";
import VideoWistia from "../../components/Video/VideoWistia";
import { banner } from "../../assets";
import Footer from "../../components/Footer/Footer";
import AboutUs from "../../components/AboutUs/AboutUs"

// Lazy load de componentes
const Integraciones = lazy(() => import("../../components/Integraciones/Integraciones"));
const Testimonios = lazy(() => import("../../components/Testimonios/Testimonials"));
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
        <div className="relative w-full z-10 text-center text-white px-2 lg:px-32 mt-32 lg:mt-16">
          <h1 className="text-4xl lg:text-5xl hanken-700 mb-6 text-gray-700 text-balance">
            Your all-in-one tech marketing partner
          </h1>

          <VideoWistia />
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
