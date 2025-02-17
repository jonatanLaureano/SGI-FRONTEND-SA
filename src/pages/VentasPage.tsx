import { useState, useMemo } from "react";
import { FaPlus } from "react-icons/fa";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Dashboard/Header";
import SearchBar from "../components/Sales/SearchBar";
import StatusFilter from "../components/Sales/StatusFilter";
import DeliveryFilter from "../components/Sales/DeliveryFilter";
import Pagination from "../components/Pagination/Pagination";
import SalesTable from "../components/Sales/SalesTable";
import { salesData } from "../data/Ventas"; 

const itemsPerPage = 12;

const VentasPage = () => {
  const [searchCode, setSearchCode] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [deliveryFilter, setDeliveryFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredSales = useMemo(() => {
    return salesData.filter((sale) => {
      const matchesSearch = sale.codigo.toLowerCase().includes(searchCode.toLowerCase());
      const matchesStatus = !statusFilter || sale.status.toLowerCase() === statusFilter.toLowerCase();
      const matchesDelivery = !deliveryFilter || sale.tipoEntrega.toLowerCase() === deliveryFilter.toLowerCase();
      return matchesSearch && matchesStatus && matchesDelivery;
    });
  }, [searchCode, statusFilter, deliveryFilter]);

  const paginatedSales = useMemo(() => {
    return filteredSales.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  }, [filteredSales, currentPage]);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-white overflow-auto">
        <Header />
        <div className="p-4">
          <div className="flex flex-wrap md:flex-nowrap gap-4 mb-4">
            <SearchBar value={searchCode} onChange={setSearchCode} />
            <DeliveryFilter value={deliveryFilter} onChange={setDeliveryFilter} />
            <StatusFilter value={statusFilter} onChange={setStatusFilter} />
            <div className="ml-auto">
              <button
                onClick={() => console.log("Nueva venta")}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2"
              >
                <FaPlus className="h-4 w-4" />
                Agregar
              </button>
            </div>
          </div>
          <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
            <table className="w-full min-w-max">
              <SalesTable
                items={paginatedSales}
                onViewProducts={(codigo) => console.log(`Ver productos: ${codigo}`)}
                onViewDetails={(codigo) => console.log(`Ver detalles: ${codigo}`)}
                onDownloadReceipt={(codigo) => console.log(`Descargar recibo: ${codigo}`)}
                onEdit={(codigo) => console.log(`Editar venta: ${codigo}`)}
                onCancel={(codigo) => console.log(`Cancelar venta: ${codigo}`)}
              />
            </table>
          </div>
          <div className="mt-4">
            <Pagination
              totalPages={Math.ceil(filteredSales.length / itemsPerPage)}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default VentasPage;

