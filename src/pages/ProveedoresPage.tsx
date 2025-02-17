import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Dashboard/Header";
import ProvidersSearchByName from "../components/Providers/ProvidersSearchName";
import ProvidersSearchByRUC from "../components/Providers/ProvidersSearchRuc";
import Proveedores from "../data/Proveedores";
import Pagination from "../components/Pagination/Pagination";
import { HiEye, HiOutlinePencilAlt, HiTrash } from "react-icons/hi";
import { LuDownload } from "react-icons/lu";

const ProveedoresPage = () => {
  const [searchName, setSearchName] = useState("");
  const [searchRUC, setSearchRUC] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; 
  const handleSearchNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(event.target.value);
  };
  const handleSearchRUCChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchRUC(event.target.value);
  };
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const filteredProveedores = Proveedores.filter((proveedor) =>
    (searchName ? proveedor.nombre.toLowerCase().includes(searchName.toLowerCase()) : true) &&
    (searchRUC ? proveedor.ruc.includes(searchRUC) : true)
  );

  const totalPages = Math.ceil(filteredProveedores.length / itemsPerPage);
  const offset = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredProveedores.slice(offset, offset + itemsPerPage);

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-white overflow-auto">
        <Header />
        <div className="p-4">
          <div className="flex flex-wrap md:flex-nowrap gap-5 mb-4 px-4">
            <ProvidersSearchByName searchName={searchName} onChange={handleSearchNameChange} />
            <ProvidersSearchByRUC searchRUC={searchRUC} onChange={handleSearchRUCChange} />
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
                  <th className="py-2 px-4 text-center">RUC</th>
                  <th className="py-2 px-4 text-center">Teléfono</th>
                  <th className="py-2 px-4 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((proveedor, index) => (
                  <tr
                    key={proveedor.id}
                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-gray-200`}
                  >
                    <td className="py-2 px-4 text-center">{proveedor.id}</td>
                    <td className="py-2 px-4 text-center">{proveedor.nombre}</td>
                    <td className="py-2 px-4 text-center">{proveedor.ruc}</td>
                    <td className="py-2 px-4 text-center">{proveedor.telefono}</td>
                    <td className="py-2">
                      <div className="flex justify-center items-center space-x-1"> 
                        <button className="bg-GreenIcon text-white px-1 py-1 rounded hover:bg-green-600">
                          <HiEye />
                        </button>
                        <button className="bg-CelesteIcon text-white px-1 py-1 rounded hover:bg-green-600">
                          <LuDownload />
                        </button>
                        <button className="bg-AzulIcon text-white px-1 py-1 rounded hover:bg-green-600">
                          <HiOutlinePencilAlt />
                        </button>
                        <button className="bg-red-500 text-white px-1 py-1 rounded hover:bg-green-600">
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

export default ProveedoresPage;