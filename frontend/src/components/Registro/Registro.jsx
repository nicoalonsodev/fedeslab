import React, { useState, useRef } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";
import email from "../../assets/email.svg";
import person from "../../assets/person.svg";
import { logo } from "../../assets";
import "./Registro.css";

const Registro = ({ actualizarEstado }) => {
  const formRef = useRef(null);
  // const history = useHistory();
  const [registro, setRegistro] = useState({
    FNAME: "",
    EMAIL: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    EMAIL: "Ingresar un Email",
    FNAME: "Ingresar un Nombre",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

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
    if (!registro.FNAME) {
      errors.FNAME = "Llenar con su nombre";
    }
    if (!registro.EMAIL) {
      errors.EMAIL = "Debes ingresar un email.";
    }
    if (registro.EMAIL) {
      const emailRegex =
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      if (!emailRegex.test(registro.EMAIL)) {
        errors.EMAIL = "El email ingresado no es válido";
      }
    }
    setErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(registro);
    if (Object.keys(errors).length === 0) {
      setRegistro({
        FNAME: "",
        EMAIL: "",
      });

      if (formRef.current) {
        formRef.current.submit();
      }
      Submit(e);
    } else {
      setFormSubmitted(true);
    }
  };

  const Submit = (e) => {
    const formDatab = new FormData();
    for (const key in registro) {
      formDatab.append(key, registro[key]);
    }

    fetch("https://script.google.com/macros/s/AKfycbxTs-CYjqMdR-/exec", {
      method: "POST",
      body: formDatab,
      mode: "no-cors",
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((error) => {
        console.log(error);
      });

    const form = e.target.closest("form");
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      mode: "no-cors",
    })
      .then(() => {
        // Mostrar mensaje de éxito (puedes ajustar esto según tus necesidades)
      })
      .catch(() => {
        // Manejo de error (puedes ajustar esto según tus necesidades)
        const errorResponse = document.getElementById("mce-error-response");
        errorResponse.style.display = "block";
        errorResponse.textContent = "Subscription failed. Please try again.";
      });

    setIsLoading(true);
    setRegistro({
      FNAME: "",
      EMAIL: "",
    });
    actualizarEstado(false);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "MetaLead",
      eventCategory: "Lead",
      eventAction: "Submit",
      eventLabel: registro.FNAME,
      // phone: registro.PHONE,
      email: registro.EMAIL,
      firstName: registro.FNAME.toLowerCase().trim(),
      // externalID: localStorage.getItem('externalID'),
    });

    window.open("https://calendly.com/", "_blank");
  };

  const handleClick = (click) => {
    actualizarEstado(click);
  };

  return (
    <div className="max-w-[1100px] flex items-center justify-center">
      <div className="max-w-[700px] p-4 bg-white rounded-lg shadow-lg overflow-auto max-h-[700px] relative">
        <button
          className="bg-gray-500 hover:bg-gray-700 transition duration-300 ease-in-out text-white font-semibold text-sm py-1 px-2 rounded absolute top-0 right-0 mt-2 mr-2"
          onClick={() => handleClick(false)}
          // style={{ marginLeft: "250px" }}
        >
          X
        </button>
        <div className="flex justify-center mb-2">
          <img src={logo} alt="Logo" className="w-30 h-20 p-0" />
        </div>

        <h3
          className="text-sm font-bold text-red-500 mb-2 mt-0 mx-2 md:my-0 text-left"
          style={{ marginBottom: "1rem" }}
        >
          *Utilizaremos estos datos para ponernos en contacto y poder ofrecerte
          el mejor servicio posible.
        </h3>

        <form className="max-w-[400px] sm:max-w-[700px] mx-auto">
          <div className="mb-2">
            <input
              type="text"
              id="FNAME"
              name="FNAME"
              value={registro.FNAME}
              onChange={handleChange}
              placeholder="Ingresa tu Nombre y Apellido"
              className="input-f h-[40px] w-full px-4 pl-10 mt-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 hanken-300 text-gray-800"
              required
              style={{
                backgroundImage: `url(${person})`,
                backgroundSize: "25px 25px",
                backgroundPosition: "5px center",
                backgroundRepeat: "no-repeat",
              }}
              autocomplete="name"
            />
            {formSubmitted && errors.FNAME && (
              <span className="hanken-300 text-red-500">{errors.FNAME}</span>
            )}
          </div>

          <div className="mb-4">
            <input
              type="Email"
              id="EMAIL"
              name="EMAIL"
              value={registro.EMAIL}
              onChange={handleChange}
              placeholder="Ingresá tu Correo electrónico"
              className="input-f h-[40px] w-full px-4 pl-10 mt-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 hanken-300 text-gray-800"
              required
              style={{
                backgroundImage: `url(${email})`,
                backgroundSize: "25px 25px",
                backgroundPosition: "5px center",
                backgroundRepeat: "no-repeat",
              }}
              autocomplete="email"
            />
            {formSubmitted && errors.EMAIL && (
              <span className="hanken-300 text-red-500">{errors.EMAIL}</span>
            )}
          </div>
          <div className="flex items-center justify-center ">
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
                className="w-full hanken-500 sm:w-32 bg-gradient-to-r from-[#4be650] to-[#029e0a] text-white py-2 rounded-lg mx-auto block text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fa9406] hover:scale-110 duration-300 mb-2"
              >
                Registro
              </button>
            )}
          </div>
        </form>
        <div className="text-center"></div>
        <p className="text-xs text-gray-800 text-center mt-8 hanken-500">
          &copy; 2024 Fedeslab
        </p>
      </div>
    </div>
  );
};

export default Registro;

// className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2"
