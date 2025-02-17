import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Dashboard/Header";
import ClientSearch from "../components/Clients/ClientSearch";
import Clientes from "../data/Clientes";
import { HiEye, HiOutlinePencilAlt, HiTrash } from "react-icons/hi";
import Pagination from "../components/Pagination/Pagination";

const ClientesPage = () => {

const [searchClient, setSearchClient] = useState("");
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 12; // Número de clientes por página

const handleSearchClientChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchClient(event.target.value);
};

const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const filteredClientes = Clientes.filter((cliente) =>
    searchClient ? cliente.nombres.toLowerCase().includes(searchClient.toLowerCase()) : true
  );

  const totalPages = Math.ceil(filteredClientes.length / itemsPerPage);
  const offset = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredClientes.slice(offset, offset + itemsPerPage);

    return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-white overflow-auto">
        <Header />
        <div className="p-4">
        <div className="flex flex-wrap md:flex-nowrap gap-5 mb-4 px-4">
            <ClientSearch searchClient={searchClient} onchange={handleSearchClientChange} />
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
                  <th className="py-2 px-4 text-center">Apellidos</th>
                  <th className="py-2 px-4 text-center">Correo</th>
                  <th className="py-2 px-4 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((cliente) => (
                  <tr key={cliente.id} className="hover:bg-gray-100">
                    <td className="py-2 px-4 text-center">{cliente.id}</td>
                    <td className="py-2 px-4 text-center">{cliente.nombres}</td>
                    <td className="py-2 px-4 text-center">{cliente.apellidos}</td>
                    <td className="py-2 px-4 text-center">{cliente.correo}</td>
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

export default ClientesPage;