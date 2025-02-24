import { useState } from "react";
import { Search } from "lucide-react";
import logo from "../img/logo.png";
import { Link, NavLink } from 'react-router'

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <nav className="w-full bg-black text-white px-6 py-3 flex items-center justify-between">

      {/* Logo */}
      <div className="text-xl font-bold">
        <img src={logo} alt="Logo" className="h-10" />
      </div>

      {/* Links */}
      <div className="">
        <nav className=" gap-5 text-md">
          <Link to="home" className="px-4 py-2 rounded-lg transition duration-300">
            Home
          </Link>
          <Link to="nosotros" className="px-4 py-2 rounded-lg transition duration-300">
            Nosotros
          </Link>
          <Link to="servicios" className="whitespace-nowrap px-3 py-2 rounded-lg transition">
            Servicios
          </Link>
          <Link to="noticias" className="whitespace-nowrap px-3 py-2 rounded-lg ">
            Noticias
          </Link>
          <Link to="contactos" className="whitespace-nowrap px-3 py-2 rounded-lg">
            Contactos
          </Link>
        </nav>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          className="bg-[var(--color-gray)] text-[var(--color-black)] rounded-full px-4 py-1 pl-10 w-40 md:w-48 focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--color-black)] w-4 h-4" />
      </div>
    </nav>
  );
}
