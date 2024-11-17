import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { newsData } from "../../utils/newsData";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const NewsDetail = () => {
  const { slug } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundNews = newsData.find((item) => item.slug === slug);
    setNews(foundNews);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!news) {
    return (
      <div>
        <Header />

        
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/novedades" className="flex items-center text-blue-500 mb-8">
          <IoIosArrowBack className="mr-2" /> Volver a noticias
        </Link>
        <div className="mb-8">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-96 object-cover rounded-lg mb-4"
          />
          <div className="flex justify-between items-center mb-2 text-left">
            <span className="text-gray-500">{news.date}</span>
            <span className="bg-black text-white text-sm px-2 py-1 rounded">
              {news.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-left">{news.title}</h1>
          <p className="text-lg text-gray-700 text-left">{news.fullText}</p>
          <div
            className="mt-6 text-left"
            dangerouslySetInnerHTML={{ __html: news.additionalContent }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsDetail;
