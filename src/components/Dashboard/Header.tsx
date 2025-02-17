// import React from "react";
import { useLocation } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";


const Header = () => {
  const location = useLocation();


  const pageTitles: Record<string, string> = {
    "/": "Dashboard",
    "/dashboard": "Dashboard",
    "/locales": "Locales",
    "/inventario": "Inventario",
    "/ventas": "Ventas",
    "/categorizacion": "Categorización",
    "/empleados": "Empleados",
    "/proveedores": "Proveedores",
    "/clientes": "Clientes",
    "/categorizacion/categoria": "Categorías",
    "/categorizacion/subcategoria": "SubCategoría",
    "/categorizacion/tipos": "Tipos",
  };

  const title = pageTitles[location.pathname] || "Página";

  return (
    <header className="flex items-center justify-between p-10 bg-white">
      <h1 className="text-4xl font-bold">{title}</h1>
      <div className="flex items-center gap-4">
        <button className="relative">
          <IoIosNotificationsOutline size={30} />
        </button>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5g3t3msnAK7Tdi5ySjVl3xRFXPCI-PQSlQ&s"
          alt="Profile"
          className="rounded-full w-10 h-10"
        />
        
      </div>
    </header>
  );
};

export default Header;
