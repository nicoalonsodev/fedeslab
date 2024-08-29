import React from 'react';
import './Testimonios.css';

const testimonials = [
  {
    quote: "Ha sido un placer trabajar con Ads; su herramienta no solo es extremadamente eficaz y fácil de usar, sino que además ofrecen un servicio de atención al cliente y una asistencia excepcionales.",
    author: "Devora Meroz",
    role: "Digital Marketing and Paid Campaign Specialist en Laura Canada"
  },
  {
    quote: "Conseguimos trabajar en una estrategia de redes sociales innovadora que nos permitió superar nuestros objetivos. Trabajar con Ads es sinónimo de éxito.",
    author: "Mireia Benedicto",
    role: "Advertising Department en Mango"
  },
  {
    quote: "Ads ha satisfecho todas nuestras necesidades desde el primer día. El equipo comprendió claramente nuestros retos y oportunidades y elaboró un plan de medios sólido para ayudarnos a crecer.",
    author: "Christophe Lephilibert",
    role: "Director of Marketing & Growth en Electromaps"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section py-16">
      <h2 className="text-4xl font-bold text-center mb-8">No tomes nuestra palabra</h2>
      <p className="text-center font-medium text-gray-500 mb-12">Mira lo que nuestros clientes dicen de nosotros</p>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial p-6 bg-white shadow-lg rounded-lg relative">
            <p className="quote text-lg font-normal text-gray-700 mb-4">{testimonial.quote}</p>
            <p className="text-gray-800 font-bold">{testimonial.author}</p>
            <p className="text-gray-700 font-light">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;


