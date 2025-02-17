import { FaRegFilePdf, FaRegEdit } from 'react-icons/fa';
import { LuEye } from 'react-icons/lu';
import { RiDeleteBin6Line } from 'react-icons/ri';

type Status = 'Pagado' | 'Entregado' | 'Cancelado';

interface SaleItem {
  codigo: string;
  monto: number;
  status: Status;
  tipoEntrega: string;
  encargado: string;
  cliente: string;
}

interface SalesTableProps {
  items: SaleItem[];
  onViewProducts: (codigo: string) => void;
  onViewDetails: (codigo: string) => void;
  onDownloadReceipt: (codigo: string) => void;
  onEdit: (codigo: string) => void;
  onCancel: (codigo: string) => void;
}

const SalesTable = ({ 
  items, 
  onViewProducts,
  onViewDetails,
  onDownloadReceipt,
  onEdit,
  onCancel 
}: SalesTableProps) => {
  const getStatusBadge = (status: Status) => (
    <span className="text-base font-normal">{status}</span>
  );

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-AzulSidebar text-white text-center">
          <th className="px-4 py-2 text-center">Código de venta</th>
          <th className="px-4 py-2 text-center">Monto total</th>
          <th className="px-4 py-2 text-center">Status</th>
          <th className="px-4 py-2 text-center">Tipo entrega</th>
          <th className="px-4 py-2 text-center">Encargado</th>
          <th className="px-4 py-2 text-center">Cliente</th>
          <th className="px-4 py-2 text-center">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.codigo} className="border-b border-gray-200 hover:bg-gray-50">
            <td className="px-4 py-2 text-center">{item.codigo}</td>
            <td className="px-4 py-2 text-center">${item.monto.toFixed(2)}</td>
            <td className="px-4 py-2 text-center">{getStatusBadge(item.status)}</td>
            <td className="px-4 py-2 text-center">{item.tipoEntrega}</td>
            <td className="px-4 py-2 text-center">{item.encargado}</td>
            <td className="px-4 py-2 text-center">{item.cliente}</td>
            <td className="px-4 py-2 text-center">
              <div className="flex justify-center space-x-2">
                <button 
                  className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
                  onClick={() => onViewProducts(item.codigo)}
                >
                  <LuEye title="Ver productos" />
                </button>
                <button 
                  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                  onClick={() => onViewDetails(item.codigo)}
                >
                  <LuEye title="Ver detalles" />
                </button>
                <button 
                  className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
                  onClick={() => onDownloadReceipt(item.codigo)}
                >
                  <FaRegFilePdf title="Descargar comprobante" />
                </button>
                <button 
                  className="bg-blue-400 text-white p-2 rounded hover:bg-blue-500"
                  onClick={() => onEdit(item.codigo)}
                >
                  <FaRegEdit title="Editar" />
                </button>
                <button 
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                  onClick={() => onCancel(item.codigo)}
                >
                  <RiDeleteBin6Line title="Cancelar venta" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalesTable;
