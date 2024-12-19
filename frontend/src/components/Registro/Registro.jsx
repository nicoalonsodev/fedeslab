import React, { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { logo } from "../../assets";
import "./Registro.css";

const Registro = ({ actualizarEstado, actualizarEstadoAnswer }) => {
  const [registro, setRegistro] = useState({
    INVESTMENT: "",
  });

  const [errors, setErrors] = useState({
    INVESTMENT: "Selecciona una opción",
    captcha: "Completa el CAPTCHA",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null); // Almacena el valor del captcha

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
    if (!captchaValue) {
      errors.captcha = "Completa el CAPTCHA";
    }
    setErrors(errors);
  };

  const handleCaptchaVerify = (token) => {
    setCaptchaValue(token);
    setErrors((prevErrors) => ({ ...prevErrors, captcha: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(registro);
    if (Object.keys(errors).length === 0) {
      if (registro.INVESTMENT === "Sí") {
        Submit();
      } else {
        actualizarEstadoAnswer(true);
        actualizarEstado(false);
      }
    } else {
      setFormSubmitted(true);
    }
  };

  const Submit = () => {
    setIsLoading(true);
    actualizarEstado(false);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "MetaLeadEvent",
      eventCategory: "Lead",
      eventAction: "Submit",
      eventLabel: "MetaLeadEvent",
    });
    window.open("https://calendly.com/federicopasquinimkt/30min", "_blank");
  };

  return (
    <div className="max-w-[1100px] flex items-center justify-center">
      <div className="w-[700px] p-4 bg-white rounded-lg shadow-lg overflow-auto max-h-[700px] relative">
        <button
          className="bg-gray-500 hover:bg-gray-700 transition duration-300 ease-in-out text-white font-semibold text-sm py-1 px-2 rounded absolute top-0 right-0 mt-2 mr-2"
          onClick={() => actualizarEstado(false)}
        >
          X
        </button>
        <div className="flex justify-center mb-2">
          <img src={logo} alt="Logo" className="w-40  p-0" />
        </div>

        <form className="max-w-[400px] sm:max-w-[700px] mx-auto">
          <div className="mb-4">
            <label className="text-gray-700 text-xl lg:text-2xl font-semibold mb-2">
              ¿Tienes más de 1,000 USD para invertir?
            </label>
            <div className="flex gap-4 justify-center">
              <label className="text-gray-800 font-semibold text-lg">
                <input
                  type="radio"
                  name="INVESTMENT"
                  value="Sí"
                  onChange={handleChange}
                  checked={registro.INVESTMENT === "Sí"}
                  className=" h-5 w-5 border-2 border-gray-400 rounded-full checked:bg-green-500 checked:border-green-500 transition duration-200 ease-in-out relative"
                />
                <span> Sí</span>
              </label>
              <label className="text-gray-800 font-semibold text-lg flex items-center">
                <input
                  type="radio"
                  name="INVESTMENT"
                  value="No"
                  onChange={handleChange}
                  checked={registro.INVESTMENT === "No"}
                  className=" h-5 w-5 border-2 border-gray-400 rounded-full checked:bg-green-500 checked:border-green-500 transition duration-200 ease-in-out relative"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
            {formSubmitted && errors.INVESTMENT && (
              <span className="hanken-300 text-red-500">
                {errors.INVESTMENT}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center my-4">
            <HCaptcha
              sitekey="ae42ed4c-ec58-4eb4-a83a-ccd0ada07b86" // Reemplaza con tu site key de hCaptcha
              onVerify={handleCaptchaVerify}
            />
            {formSubmitted && errors.captcha && (
              <span className="w-full text-center hanken-300 text-red-500">
                {errors.captcha}
              </span>
            )}
          </div>

          <div className="flex items-center justify-center py-4">
            {isLoading ? (
              <img
                src={logo}
                alt="loading"
                className="max-w-[76px] max-h-[76px]"
              />
            ) : (
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-auto px-3 hanken-500 bg-gradient-to-r from-[#4be650] to-[#029e0a] text-white py-2 rounded-lg mx-auto block text-lg hover:scale-110 duration-300 mb-2"
              >
                Agendar Llamada
              </button>
            )}
          </div>
        </form>
        <p className="text-xs text-gray-800 text-center mt-8 hanken-500">
          &copy; 2024 Fedeslab
        </p>
      </div>
    </div>
  );
};

export default Registro;
