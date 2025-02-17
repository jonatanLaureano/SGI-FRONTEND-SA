import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Dashboard/Header";
import Tipos from "../../data/Tipos";
import TypeSearch from "../../components/Categorization/TypeSearch";
import { HiOutlinePencilAlt, HiTrash } from "react-icons/hi";
import Pagination from "../../components/Pagination/Pagination";

const TiposPage = () => {
  const [searchtype, setSearchtype] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Número de clientes por página

  const handleTypeSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchtype(event.target.value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const filteredType = Tipos.filter((tipos) =>
    searchtype ? tipos.nombre.toLowerCase().includes(searchtype.toLowerCase()) : true
  );

  const totalPages = Math.ceil(filteredType.length / itemsPerPage);
  const offset = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredType.slice(offset, offset + itemsPerPage);

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-white overflow-auto">
        <Header />
        <div className="p-4">
          <div className="flex flex-wrap md:flex-nowrap gap-5 mb-4 px-4">
            <TypeSearch searchtype={searchtype} onchange={handleTypeSearchChange} />
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
                  <th className="py-2 px-4 text-center">ID</th>
                  <th className="py-2 px-4 text-center">Nombre</th>
                  <th className="py-2 px-4 text-center">Subcategoría</th>
                  <th className="py-2 px-4 text-center">Categoría</th>
                  <th className="py-2 px-4 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((tipos, index) => (
                  <tr
                    key={tipos.id}
                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-gray-200`}
                  >
                    <td className="py-2 px-4 text-center">{tipos.id}</td>
                    <td className="py-2 px-4 text-center">{tipos.nombre}</td>
                    <td className="py-2 px-4 text-center">{tipos.subcategoria}</td>
                    <td className="py-2 px-4 text-center">{tipos.categoria}</td>
                    <td className="py-2">
                      <div className="flex justify-center items-center space-x-2">
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

export default TiposPage;
