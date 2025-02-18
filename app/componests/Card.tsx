const Card = () => {
    return (
      <div className="w-52 h-52 border-2 border-dashed border-black rounded-lg overflow-hidden shadow-lg">
        <div className="bg-gray-300 h-40 flex items-center justify-center">
          <span className="text-gray-500">Imagen</span>
        </div>
        <div className="bg-[#b98d5d] h-12 flex items-center justify-center">
          <span className="text-white">Contenido</span>
        </div>
      </div>
    );
  };
  
  export default Card;