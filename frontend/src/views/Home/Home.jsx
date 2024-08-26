import React from "react";
import Header from "../../components/Header/Header";
import VideoWistia from "../../components/Video/VideoWistia";
import { banner } from "../../assets";
// import InstagramSection from "../../components/InstagramSection/InstagramSection";
import AboutUs from "../../components/AboutUs/AboutUs";
// import DescriptionContact from "../../components/DescriptionContact/DescriptionContact";
// import AboutIrene from "../../components/AboutIrene/AboutIrene";
// import Therapys from "../../components/Therapis/Therapis";
import Footer from "../../components/Footer/Footer";
import NewsCards from "../../components/NewsCards/NewsCards";
import integrations from "../../assets/integrations.png"
const Home = () => {
  return (
    <div className="hanken-100">
      <Header />
      <div
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative w-full z-10 text-center text-white px-2 lg:px-32 mt-16">
          <h1 className="text-3xl lg:text-5xl hanken-700 mb-6 text-gray-700">
            Your all-in-one tech marketing partner
          </h1>
          
          <VideoWistia />
        </div>
      </div>

      <AboutUs />
      <img src={integrations} alt="int" />
      <NewsCards />
      {/* <AboutIrene />
      <InstagramSection /> */}
      <Footer />
    </div>
  );
};

export default Home;
