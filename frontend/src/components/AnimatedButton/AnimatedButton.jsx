import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./AnimatedButton.css";
import { SiCalendly } from "react-icons/si";
import ScheduleCallModal from "../ScheduleCallModal/ScheduleCallModal";

const AnimatedButton = ({cta}) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    navigate('/');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={cta ? scrollToTop : openModal}
        className="w-full lg:w-100 animated-button text-xl border-[1px] border-[#398038] px-8 py-3 rounded-full"
      >
        <span className="text-lg lg:text-2xl flex justify-center items-center"><SiCalendly />AGENDA TU LLAMADA</span>
      </button>
      
      {/* Modal para agendar la llamada */}
      <ScheduleCallModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default AnimatedButton;


