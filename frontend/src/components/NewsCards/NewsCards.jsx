import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {newsData} from "../../utils/newsData"

const NewsCards = () => {
  const refContainer = useRef(null);
  const isInView = useInView(refContainer, { once: true, threshold: 0.1 });

  return (
    <div id="blog"  className="container mx-auto py-10 px-2 lg:px-32" ref={refContainer}>
      <motion.div
        className="w-full flex flex-col justify-start items-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="hanken-400 text-4xl text-gray-700 text-center lg:text-left">
          Fedeslab{" "}
          <span className="hanken-700 text-[#5AC758]">Novedades</span>
        </h1>
        <hr className="w-32 border-t-[3px] border-[#5AC758] mt-2" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((news, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }} 
            transition={{ duration: 0.8, delay: index * 0.3 }} 
          >
            <img
              src={news.thumbnail}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 w-full flex flex-wrap justify-start">
              <span className="text-xs mb-2 text-left hanken-400 text-green-500 uppercase">
                {news.category}
              </span>
              <h2 className="hanken-500 w-full text-left mt-2 text-2xl font-bold text-gray-800">
                {news.title}
              </h2>
              <p className="hanken-200 text-left mt-2 text-gray-600">
                {news.fullText}
              </p>
              <a
                href={news.link}
                className="hanken-300 text-left mt-4 inline-block text-green-500 hover:text-green-600"
              >
                Leer más &rarr;
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewsCards;
