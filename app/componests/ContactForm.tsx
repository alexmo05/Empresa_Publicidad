import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    comentario: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  return (
    <div className="max-w-md mx-auto bg-[#b98d5d] p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold text-white bg-black p-2 rounded-t-lg">
        Contacta con nosotros
      </h2>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label htmlFor="nombre" className="block text-sm font-medium">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-lg bg-gray-200 text-black  focus:outline-none"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="apellidos" className="block text-sm font-medium">Apellidos</label>
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-lg bg-gray-200  text-black focus:outline-none"
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block text-sm font-medium">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg bg-gray-200 text-black  focus:outline-none"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="comentario" className="block text-sm font-medium">Comentario</label>
          <textarea
            id="comentario"
            name="comentario"
            value={formData.comentario}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg bg-gray-200  text-black focus:outline-none h-32"
          ></textarea>
        </div>
        <div className="mt-4 flex justify-center">
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
