import { useState } from "react";
import Button from "./Button"; // Importamos el botón reutilizable

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    comentario: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
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
    <div className="max-w-md mx-auto bg-[var(--color-brown)] p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold text-white bg-[var(--color-black)] p-2 rounded-t-lg">
        Contacta con nosotros
      </h2>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label htmlFor="nombre" className="block text-sm font-medium text-white">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-lg bg-[var(--color-gray)] text-[var(--color-black)] focus:outline-none"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="apellidos" className="block text-sm font-medium text-white">
              Apellidos
            </label>
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-lg bg-[var(--color-gray)] text-[var(--color-black)] focus:outline-none"
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg bg-[var(--color-gray)] text-[var(--color-black)] focus:outline-none"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="comentario" className="block text-sm font-medium text-white">
            Comentario
          </label>
          <textarea
            id="comentario"
            name="comentario"
            value={formData.comentario}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg bg-[var(--color-gray)] text-[var(--color-black)] focus:outline-none h-32"
          ></textarea>
        </div>
        <div className="mt-4 flex justify-center">
          <Button text="Enviar" variant="primary" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
