import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Dashboard/Header";
import locales from "../data/Locales";
import { HiEye, HiOutlinePencilAlt, HiTrash} from "react-icons/hi";
import Pagination from "../components/Pagination/Pagination";
import { FaSearch } from "react-icons/fa";

const LocalesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterType, setFilterType] = useState(""); // Estado para el filtro de tipo
  const [searchName, setSearchName] = useState(""); // Estado para el término de búsqueda por nombre
  const [searchAddress, setSearchAddress] = useState(""); // Estado para el término de búsqueda por dirección
  const itemsPerPage = 12; // Número de elementos por página

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterType(event.target.value);
    setCurrentPage(1); // Reiniciar a la primera página al cambiar el filtro
  };

  const handleSearchNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(event.target.value);
    setCurrentPage(1); // Reiniciar a la primera página al cambiar el término de búsqueda
  };

  const handleSearchAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchAddress(event.target.value);
    setCurrentPage(1); // Reiniciar a la primera página al cambiar el término de búsqueda
  };

  const filteredItems = locales.filter((item) =>
    (filterType ? item.tipo === filterType : true) &&
    (searchName ? item.nombre.toLowerCase().includes(searchName.toLowerCase()) : true) &&
    (searchAddress ? item.direccion.toLowerCase().includes(searchAddress.toLowerCase()) : true)
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const offset = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(offset, offset + itemsPerPage);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-white overflow-auto">
        <Header />
        <div className="p-4">
          <div className="flex flex-wrap md:flex-nowrap gap-5 mb-4 px-4">
            <div className="flex items-center w-full md:w-auto" style={{ maxWidth: "400px" }}>
              <select
                value={filterType}
                onChange={handleFilterChange}
                className="p-2 rounded-lg w-full pl-3 pr-10 border border-gray-500 text-gray-500 "
                >
                <option value="">Filtrar por tipo</option>
                <option value="Almacén">Almacén</option>
                <option value="Tienda">Tienda</option>
              </select>
            </div>
            <div className="flex items-center border border-gray-500 rounded-lg p-2 w-full md:w-auto" style={{ maxWidth: "400px" }}>
              <input
                type="text"
                placeholder="Buscar por nombre"
                value={searchName}
                onChange={handleSearchNameChange}
                className="w-full outline-none truncate"
              />
             <button>
                <FaSearch className="text-gray-500 ml-8" />
            </button>
            </div>
            <div className="flex items-center border border-gray-500 rounded-lg p-2 w-full md:w-auto" style={{ maxWidth: "400px" }}>
              <input
                type="text"
                placeholder="Buscar por dirección"
                value={searchAddress}
                onChange={handleSearchAddressChange}
                className="w-full outline-none truncate"
              />
              <button>
                <FaSearch className="text-gray-500 ml-8" />
              </button>
            </div>
            <div className="flex gap-5 w-full md:w-auto ml-auto">
              <button className="bg-botonAgregar text-white px-4 py-2 rounded-lg font-semibold">
                Agregar
              </button>
            </div>
          </div>
          <div className="overflow-x-auto px-4 py-4">
            <table className="w-full border-collapse bg-white shadow rounded border border-black text-sm md:text-base">
              <thead className="bg-AzulSidebar text-white text-center">
                <tr className="bg-AzulSidebar text-white">
                  <th className="py-2 px-4 text-center">Nombre</th>
                  <th className="py-2 px-4 text-center">Dirección</th>
                  <th className="py-2 px-4 text-center">Tipo</th>
                  <th className="py-2 px-4 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-100 " : "bg-white"
                    }`}
                  >
                    <td className="py-2 px-4 text-center">{item.nombre}</td>
                    <td className="py-2 px-4 text-center">{item.direccion}</td>
                    <td className="py-2 px-4 text-center">{item.tipo}</td>
                    <td className="py-2">
                    <div className="flex justify-center items-center space-x-2"> 
                      <button className="bg-GreenIcon text-white px-1 py-1 rounded hover:bg-green-600">
                        <HiEye />
                      </button>
                      <button className="bg-AzulIcon text-white px-1 py-1 rounded hover:bg-blue-600">
                        <HiOutlinePencilAlt />
                      </button>
                      <button className="bg-red-500 text-white px-1 py-1 rounded hover:bg-blue-600">
                        <HiTrash />
                      </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </main>
    </div>
  );
};

export default LocalesPage;