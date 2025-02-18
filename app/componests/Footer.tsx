const Footer = () => {
    return (
      <footer className="bg-[#b98d5d] text-white py-4 px-6 flex justify-between items-start border-t-2 border-black">
        <div>
          <h3 className="font-bold underline">THUNDER CREATIVES</h3>
          <ul className="mt-2">
            <li>Asociados</li>
            <li>Colaboradores</li>
            <li>Referencias</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold underline">Contactanos</h3>
          <ul className="mt-2 text-right">
            <li>Email</li>
            <li>Teléfono</li>
            <li>Redes Sociales</li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;