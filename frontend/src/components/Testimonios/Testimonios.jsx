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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="testimonios" className="testimonials-section py-16 px-2 lg:px-32" >
      <h2 className="text-4xl hanken-500 text-center mb-8 text-gray-700">
        No Tomes <span className="text-[#5AC758] hanken-700">Mi Palabra</span>
      </h2>
      <p className="text-xl text-center font-medium text-gray-500 mb-12">
        Mira lo dicen mis clientes
      </p>
      <div className="container mx-auto flex justify-center items-center">
  <div className="flex flex-wrap justify-center gap-8 px-3 lg:px-0">
    {testimonials.map((testimonial, index) => (
      <motion.div
        key={index}
        className="testimonial relative p-[20px] py-10 bg-white shadow-lg rounded-3xl text-center max-w-full  h-[260px] lg:h-[300px] lg:w-1/4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: index * 0.3 }}
        ref={ref}
      >
        <p className="quote italic text-md font-normal text-gray-700 mb-4 px-4 lg:px-[20px]">
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
