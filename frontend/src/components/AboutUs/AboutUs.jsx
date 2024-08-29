import React from "react";
// Importar íconos específicos de React Icons
import { FaBullhorn, FaChartBar, FaLightbulb } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div
      id="bodyline"
      className="relative w-screen bg-white flex flex-wrap items-center justify-center py-20 bg-gray-200"
    >
      <div className="max-w-4xl text-center p-6">
        <div className="w-full flex justify-center mb-2">
        <h1 className="hanken-500 text-4xl text-gray-700 text-center lg:text-left">
          Acerca de{" "}
          <span className="hanken-700 text-[#5AC758]">Fedeslab</span>
        </h1>
        </div>
       
        <p className="text-lg hanken-400 text-gray-600">
          Bodyline ofrece un servicio integral de transformación personalizada
          que abarca aspectos fundamentales de la salud, como la nutrición y el
          breathwork. Su programa de 6 meses se centra en mejorar la salud
          física y mental de los clientes mediante asesorías individualizadas
          uno a uno. A diferencia de otras opciones en el mercado, Bodyline se
          distingue por su enfoque personalizado, acompañando a los clientes en
          todo el proceso de transformación.
        </p>
      </div>

      {/* Servicios */}
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        <div className="bg-white rounded-3xl text-left shadow-xl p-6 max-w-xs hover:scale-110 duration-300 border-[1px] border-green-300">
          <div className="flex justify-start mb-4">
            <div className="bg-green-100 rounded-full p-4">
              <FaBullhorn className="text-green-500 text-3xl" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Paid Media</h3>
          <p className="text-gray-600 mb-4 hanken-300">
            Llega a tu audiencia con publicidad digital
          </p>
          <ul className="list-disc list-inside hanken-300 text-gray-600">
            <li>Social Ads</li>
            <li>Publicidad Programática</li>
            <li>SEM y PPC</li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl text-left shadow-xl p-6 max-w-xs hover:scale-110 duration-300 border-[1px] border-green-300">
          <div className="flex justify-start mb-4">
            <div className="bg-green-100 rounded-full p-4">
              <FaChartBar className="text-green-500 text-3xl" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Data</h3>
          <p className="text-gray-600 mb-4 hanken-300">
            Soluciones basadas en datos para tu éxito digital
          </p>
          <ul className="list-disc list-inside text-gray-600 hanken-300">
            <li>Analítica y Atribución</li>
            <li>Implementaciones Técnicas</li>
            <li>CRO</li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl text-left shadow-xl p-6 max-w-xs hover:scale-110 duration-300 border-[1px] border-green-300">
          <div className="flex justify-start mb-4">
            <div className="bg-green-100 rounded-full p-4">
              <FaLightbulb className="text-green-500 text-3xl" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Estrategia</h3>
          <p className="text-gray-600 mb-4 hanken-300">
            Potencia tu negocio con estrategias efectivas
          </p>
          <ul className="list-disc list-inside text-gray-600 hanken-300">
            <li>Consultoría</li>
            <li>Estrategia y Planificación</li>
            <li>Auditorías Técnicas</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
