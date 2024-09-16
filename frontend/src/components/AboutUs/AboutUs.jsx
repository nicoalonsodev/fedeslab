import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
// Importar íconos específicos de React Icons
import { FaBullhorn, FaChartBar, FaLightbulb } from "react-icons/fa";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true,  threshold: 0  });

  return (
    <div
      id="bodyline"
      className="relative w-screen bg-white flex flex-wrap items-center justify-center py-4 lg:py-20 bg-gray-200"
    >
      {/* Título */}
      <motion.div
        className="max-w-4xl text-center p-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
        transition={{ duration: 0.8 }}
        ref={ref}
      >
        <div className="w-full flex justify-center mb-2">
          <h1 className="hanken-500 text-4xl text-gray-700 text-center lg:text-left">
            Acerca de{" "}
            <span className="hanken-700 text-[#5AC758]">Fedeslab</span>
          </h1>
        </div>

        <motion.p
          className="text-lg hanken-400 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Fedeslab es una marca personal que soluciona el problema más grande
          que tienen todos los emprendedores digitales: generar nuevos clientes.
          Mediante estrategias de growth marketing y publicidad me enfoco en
          generar audiencias y llegar a nuevas personas con un alto grado de
          fidelización. Mediante el análisis de la competencia, el estudio del
          recorrido de cliente, estrategias de contenido y publicidad por Meta,
          Google y TikTok llevó tu marca al siguiente nivel.
        </motion.p>
      </motion.div>

      {/* Servicios */}
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {/** Card 1 */}
        <motion.div
          className="bg-white rounded-3xl text-left shadow-xl p-6 max-w-[350px] lg:max-w-xs hover:scale-110 duration-300 border-[1px] border-green-300 min-h-[400px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          ref={ref}
        >
          <div className="flex justify-start mb-4">
            <div className="bg-green-100 rounded-full p-4">
              <FaBullhorn className="text-green-500 text-3xl" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Análisis de Datos
          </h3>
          <p className="text-gray-600 mb-4  text-lg hanken-300">
            Lo que no se puede medir, no se puede mejorar
          </p>
          <ul className="list-disc list-inside  text-lg lg:text-xl text-gray-700 hanken-400">
            <li>Análisis de mercado</li>
            <li>
              Construcción de mapa cliente (desde que te conoce hasta que te
              compra)
            </li>
            <li>Análisis de oferta</li>
          </ul>
        </motion.div>

        {/** Card 2 */}
        <motion.div
          className="bg-white rounded-3xl text-left shadow-xl p-6 max-w-[350px] lg:max-w-xs hover:scale-110 duration-300 border-[1px] border-green-300 min-h-[400px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
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
            <li>
              Estrategias de post-venta  
            </li>
          </ul>
        </motion.div>

        {/** Card 3 */}
        <motion.div
          className="bg-white rounded-3xl text-left shadow-xl p-6 max-w-[350px] lg:max-w-xs hover:scale-110 duration-300 border-[1px] border-green-300 min-h-[400px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="flex justify-start mb-4">
            <div className="bg-green-100 rounded-full p-4">
              <FaLightbulb className="text-green-500 text-3xl" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Publicidad</h3>
          <p className="text-gray-600 mb-4  text-lg hanken-300 italic">
            Lo que se direcciona se puede potenciar
          </p>
          <ul className="list-disc list-inside  text-lg lg:text-xl text-gray-700 hanken-400">
            <li>Campañas direccionadas a públicos nuevos.</li>
            <li>Google, Meta y Tiktok Ads.</li>
            <li>Informes detallados e iteraciones conscientes.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
