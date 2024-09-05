import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Testimonios.css";


const testimonials = [
  {
    quote:
      "Ha sido un placer trabajar con Ads; su herramienta no solo es extremadamente eficaz y fácil de usar, sino que además ofrecen un servicio de atención al cliente y una asistencia excepcionales.",
    author: "Devora Meroz",
    role: "Digital Marketing and Paid Campaign Specialist en Laura Canada",
  },
  {
    quote:
      "Conseguimos trabajar en una estrategia de redes sociales innovadora que nos permitió superar nuestros objetivos. Trabajar con Ads es sinónimo de éxito.",
    author: "Mireia Benedicto",
    role: "Advertising Department en Mango",
  },
  {
    quote:
      "Ads ha satisfecho todas nuestras necesidades desde el primer día. El equipo comprendió claramente nuestros retos y oportunidades y elaboró un plan de medios sólido para ayudarnos a crecer.",
    author: "Christophe Lephilibert",
    role: "Director of Marketing & Growth en Electromaps",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="testimonials-section py-16 px-2 lg:px-32" >
      <h2 className="text-4xl hanken-500 text-center mb-8 text-gray-700">
        No Tomes <span className="text-[#5AC758] hanken-700">Nuestra Palabra</span>
      </h2>
      <p className="text-xl text-center font-medium text-gray-500 mb-12">
        Mira lo que nuestros clientes dicen de nosotros
      </p>
      <div className="container mx-auto flex justify-center items-center">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {testimonials.map((testimonial, index) => (
      <motion.div
        key={index}
        className="testimonial relative p-[20px] bg-white shadow-lg rounded-3xl text-center max-w-[350px]  lg:max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: index * 0.3 }}
        ref={ref}
      >
        <p className="quote italic text-lg font-normal text-gray-700 mb-4 px-4 lg:px-[20px]">
          {testimonial.quote}
        </p>
        <p className="text-gray-800 font-bold">{testimonial.author}</p>
        <p className="text-gray-700 font-light">{testimonial.role}</p>
      </motion.div>
    ))}
  </div>
</div>
    </section>
  );
};

export default Testimonials;
