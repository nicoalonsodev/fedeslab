import React, { useState } from "react";
import { logo } from "../../assets";

const AnswerNo = ({ actualizarEstado }) => {
  const [registro, setRegistro] = useState({
    INVESTMENT: "",
  });

  const [errors, setErrors] = useState({
    INVESTMENT: "Selecciona una opción",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistro((prevRegistro) => ({
      ...prevRegistro,
      [name]: value,
    }));
    validate({ ...registro, [name]: value });
  };

  const validate = (registro) => {
    let errors = {};
    if (!registro.INVESTMENT) {
      errors.INVESTMENT = "Selecciona una opción";
    }
    setErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(registro);
    if (Object.keys(errors).length === 0) {
    } else {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="w-full max-w-[600px] lg:max-w-[1100px] flex items-center justify-center">
      <div className="w-[350px] p-4 bg-white rounded-lg shadow-lg overflow-auto max-h-[700px] relative">
        <button
          className="bg-gray-500 hover:bg-gray-700 transition duration-300 ease-in-out text-white font-semibold text-sm py-1 px-2 rounded absolute top-0 right-0 mt-2 mr-2"
          onClick={() => actualizarEstado(false)}
        >
          X
        </button>
        <div className="flex justify-center mb-2">
          <img src={logo} alt="Logo" className="w-40  p-0" />
        </div>
        <h1 className="montserrat-bold text-[#3a8139] ">
          Gracias por tu Interés en Fedeslab
        </h1>
        <p className="text-gray-800 hanken-500 text-md">
          Agradecemos sinceramente que hayas considerado a Fedeslab para
          impulsar tu negocio. Nuestro enfoque se centra en trabajar con
          empresas que ya cuentan con un nivel significativo de facturación, lo
          que nos permite maximizar nuestros recursos y estrategias para lograr
          un crecimiento exponencial.
        </p>

        <p className="text-sm text-gray-800 text-center mt-8 hanken-500 text-balance">
          Gracias nuevamente por tu tiempo e interés. ¡Te deseamos mucho éxitos!
        </p>
      </div>
    </div>
  );
};

export default AnswerNo;
