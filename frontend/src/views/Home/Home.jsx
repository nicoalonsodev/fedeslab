import React from "react";
import Header from "../../components/Header/Header";
import VideoWistia from "../../components/Video/VideoWistia";
import { banner } from "../../assets";
import Integraciones from "../../components/Integraciones/Integraciones";
// import InstagramSection from "../../components/InstagramSection/InstagramSection";
// import AboutUs from "../../components/AboutUs/AboutUs";
// import DescriptionContact from "../../components/DescriptionContact/DescriptionContact";
// import AboutIrene from "../../components/AboutIrene/AboutIrene";
// import Therapys from "../../components/Therapis/Therapis";
// import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="">
      <Header />
      <div
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative w-full z-10 text-center text-white px-64 mt-20">
          <h1 className="text-4xl font-bold mb-4">
            Your all-in-one tech marketing partner
          </h1>
          
          <VideoWistia />
        </div>
      </div>
      <Integraciones />

      {/* <AboutUs />
      <AboutIrene />
      <InstagramSection /> */}
    </div>
  );
};

export default Home;
