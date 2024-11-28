import React, { useEffect } from "react";
import { FaBullhorn, FaChartBar, FaLightbulb } from "react-icons/fa";
import "./AboutUs.css"
const AboutUs = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeInElements = document.querySelectorAll(".fade-in, .scale-in");
    fadeInElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="bodyline"
      className="relative w-screen bg-white flex flex-wrap items-center justify-center py-4 lg:py-20 bg-gray-200"
    >
      {/* Título */}
      <div className="fade-in max-w-4xl text-center p-6">
        <div className="w-full flex justify-center mb-2">
          <h1 className="hanken-500 text-4xl text-gray-700 text-center lg:text-left">
            Acerca de{" "}
            <span className="hanken-700 text-[#5AC758]">Fedeslab</span>
          </h1>
        </div>
        <p className="text-lg hanken-400 text-gray-600">
          Fedeslab es una marca personal que soluciona el problema más grande
          que tienen todos los emprendedores digitales: generar nuevos clientes.
          Mediante estrategias de growth marketing y publicidad me enfoco en
          generar audiencias y llegar a nuevas personas con un alto grado de
          fidelización. Mediante el análisis de la competencia, el estudio del
          recorrido de cliente, estrategias de contenido y publicidad por Meta,
          Google y TikTok llevó tu marca al siguiente nivel.
        </p>
      </div>

      {/* Servicios */}
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {/* Card 1 */}
        <div className="scale-in bg-white rounded-3xl text-left shadow-xl p-6 max-w-[350px] lg:max-w-xs hover:scale-110 duration-300 border-[1px] border-green-300 min-h-[400px]">
          <div className="flex justify-start mb-4">
            <div className="bg-green-100 rounded-full p-4">
              <FaBullhorn className="text-green-500 text-3xl" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Análisis de Datos
          </h3>
          <p className="text-gray-600 mb-4 text-lg hanken-300">
            Lo que no se puede medir, no se puede mejorar
          </p>
          <ul className="list-disc list-inside text-lg lg:text-xl text-gray-700 hanken-400">
            <li>Análisis de mercado</li>
            <li>
              Construcción de mapa cliente (desde que te conoce hasta que te
              compra)
            </li>
            <li>Análisis de oferta</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="scale-in bg-white rounded-3xl text-left shadow-xl p-6 max-w-[350px] lg:max-w-xs hover:scale-110 duration-300 border-[1px] border-green-300 min-h-[400px]">
          <div className="flex justify-start mb-4">
            <div className="bg-green-100 rounded-full p-4">
              <FaChartBar className="text-green-500 text-3xl" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Estrategia</h3>
          <p className="text-gray-600 mb-4 text-lg hanken-300 italic">
            Lo que se mide se puede direccionar
          </p>
          <ul className="list-disc list-inside text-lg lg:text-xl text-gray-700 hanken-400">
            <li>Optimización de landing/web</li>
            <li>Estrategias de contenido</li>
            <li>Estrategias de post-venta</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="scale-in bg-white rounded-3xl text-left shadow-xl p-6 max-w-[350px] lg:max-w-xs hover:scale-110 duration-300 border-[1px] border-green-300 min-h-[400px]">
          <div className="flex justify-start mb-4">
            <div className="bg-green-100 rounded-full p-4">
              <FaLightbulb className="text-green-500 text-3xl" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Publicidad</h3>
          <p className="text-gray-600 mb-4 text-lg hanken-300 italic">
            Lo que se direcciona se puede potenciar
          </p>
          <ul className="list-disc list-inside text-lg lg:text-xl text-gray-700 hanken-400">
            <li>Campañas direccionadas a públicos nuevos.</li>
            <li>Google, Meta y Tiktok Ads.</li>
            <li>Informes detallados e iteraciones conscientes.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
