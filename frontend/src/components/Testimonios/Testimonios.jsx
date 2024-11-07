import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Testimonios.css";

const testimonials = [
  {
    quote:
      "Gracias Fede por ser un canal de crecimiento para nosotros, realmente es un placer trabajar con vos. Valoramos tu objetividad a la hora de trabajar, realmente nos hiciste dar cuenta de por donde hay que caminar!",
    author: "Camila",
    role: "Ameba",
  },
  {
    quote:
      "Muy buen desempeño de este mes Fede, muy contento de como te comunicas con el equipo. Sigamos así.",
    author: "Jorge Niel",
    role: "Director de Marketing en SynAgro",
  },
  {
    quote:
      "Muy agradecida con vos por estos meses. Cerramos un montón de clientes y fue gran parte gracias a tu forma de ver las cosas. Eternamente agradecida Fede!",
    author: "Sol",
    role: "Talma",
  },
  {
    quote:
      "Resultados espectaculares. Las campañas funcionaron muy bien, gracias por darme el puntapié que necesitaba crack",
    author: "Alvaro",
    role: "Colchon Plaza",
  },
  {
    quote:
      "Una locura hermano, no me dejan de llamar clientes jajaj, necesito que implementemos mas de esto, gracias por tanto",
    author: "Lisandro",
    role: "CIMES",
  },
];


const Testimonials = () => {
  const refContainer = useRef(null); 
  const isInView = useInView(refContainer, { once: true, threshold: 0.1 });

  return (
    <section id="testimonios" className="testimonials-section py-16 px-2 lg:px-32" ref={refContainer}>
      <motion.h2
        className="text-4xl hanken-500 text-center mb-8 text-gray-700"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
        transition={{ duration: 0.6 }}
      >
        No Tomes <span className="text-[#5AC758] hanken-700">Mi Palabra</span>
      </motion.h2>

      <motion.p
        className="text-xl text-center font-medium text-gray-500 mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Mira lo que dicen mis clientes
      </motion.p>

      <div className="container mx-auto flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial relative p-[20px] bg-white shadow-lg rounded-3xl text-center max-w-[350px] lg:max-w-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
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
