import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Dashboard/Header";
import inventario from "../data/inventario";
import { LuEye } from "react-icons/lu";
import { FaRegEdit, FaSearch } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Pagination from "../components/Pagination/Pagination";

const InventarioPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCategory, setFilterCategory] = useState(""); // Filtro por categoría
  const [searchName, setSearchName] = useState(""); // Búsqueda por nombre
  const [searchType, setSearchType] = useState(""); // Búsqueda por tipo
  const itemsPerPage = 12;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterCategory(event.target.value);
    setCurrentPage(1); // Reiniciar a la primera página
  };

  const handleSearchNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(event.target.value);
    setCurrentPage(1); // Reiniciar a la primera página
  };

  const handleSearchTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchType(event.target.value);
    setCurrentPage(1); // Reiniciar a la primera página
  };

  const filteredItems = inventario.filter((item) =>
    (filterCategory ? item.categoria === filterCategory : true) &&
    (searchName ? item.nombre.toLowerCase().includes(searchName.toLowerCase()) : true) &&
    (searchType ? item.tipo.toLowerCase().includes(searchType.toLowerCase()) : true)
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
                value={filterCategory}
                onChange={handleFilterChange}
                className="p-2 rounded-lg w-full pl-3 pr-10 border border-gray-500 text-gray-500"
              >
                <option value="">Filtrar por categoría</option>
                <option value="Electrónica">Electrónica</option>
                <option value="Hogar">Hogar</option>
                <option value="Ropa">Ropa</option>
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
                placeholder="Buscar por tipo"
                value={searchType}
                onChange={handleSearchTypeChange}
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
                <tr>
                  <th className="p-2">Nombre</th>
                  <th className="p-2">Descripción</th>
                  <th className="p-2">Categoría</th>
                  <th className="p-2">Tipo</th>
                  <th className="p-2">Precio</th>
                  <th className="p-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                  >
                    <td className="p-2 text-center">{item.nombre}</td>
                    <td className="p-2 text-center">{item.descripcion}</td>
                    <td className="p-2 text-center">{item.categoria}</td>
                    <td className="p-2 text-center">{item.tipo}</td>
                    <td className="p-2 text-center">{item.precio}</td>
                    <td className="p-2">
                      <div className="flex justify-center items-center space-x-2">
                        <button className="bg-GreenIcon text-white px-1 py-1 rounded hover:bg-green-600">
                          <LuEye />
                        </button>
                        <button className="bg-AzulIcon text-white px-1 py-1 rounded hover:bg-blue-600">
                          <FaRegEdit />
                        </button>
                        <button className="bg-red-500 text-white px-1 py-1 rounded hover:bg-red-600">
                          <RiDeleteBin6Line />
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

export default InventarioPage;
