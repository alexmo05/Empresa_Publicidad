const Footer = () => {
    return (
        <footer className="w-full bg-[#b98d5d] text-white py-4 px-6 flex justify-between items-start border-t-2 border-black">

        <div>
          <h3 className="font-bold underline">THUNDER CREATIVES</h3>
          <ul className="mt-2 space-y-1">
            <li className="hover:text-[var(--color-gray)] cursor-pointer">Asociados</li>
            <li className="hover:text-[var(--color-gray)] cursor-pointer">Colaboradores</li>
            <li className="hover:text-[var(--color-gray)] cursor-pointer">Referencias</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold underline">Contáctanos</h3>
          <ul className="mt-2 text-right space-y-1">
            <li className="hover:text-[var(--color-gray)] cursor-pointer">Email</li>
            <li className="hover:text-[var(--color-gray)] cursor-pointer">Teléfono</li>
            <li className="hover:text-[var(--color-gray)] cursor-pointer">Redes Sociales</li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  