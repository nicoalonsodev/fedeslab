import React from 'react';

const ScheduleCallModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Agendar una llamada</h2>
        <form>
          <div className="mb-4">
            <label className="block text-1xl font-bold text-gray-700">Nombre</label>
            <input type="text" className="w-full font-bold text-black px-3 py-2 border rounded-lg" placeholder="Tu nombre" />
          </div>
          <div className="mb-4">
            <label className="block text-1xl font-bold text-gray-700">Email</label>
            <input type="email" className="w-full font-bold text-black px-3 py-2 border rounded-lg" placeholder="Tu email" />
          </div>
          <div className="mb-4">
            <label className="block text- font-bold text-gray-700">Fecha y hora</label>
            <input type="datetime-local" className="w-full font-bold text-black px-3 py-2 border rounded-lg" />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-11 py-2 px-4 bg-gray-300 font-bold rounded-lg">Cancelar</button>
            <button type="submit" className="py-2 px-4 bg-green-600 text-white font-bold rounded-lg">Agendar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleCallModal;
