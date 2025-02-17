const LatestSalesTable = () => (
  <div className="bg-white rounded shadow border border-black">
    {/* Header */}
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-AzulSidebar text-white p-4 rounded-t space-y-4 sm:space-y-0">
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
        <h3 className="font-bold text-lg sm:text-xl">Últimas ventas</h3>
        <span className="text-green-400 font-bold bg-green-400 bg-opacity-20 rounded px-2">
          +7 UND
        </span>
      </div>
      <select className="bg-white border-none text-black rounded text-center p-1 sm:p-2">
        <option value="Hoy">Hoy</option>
        <option value="Esta semana">Esta semana</option>
        <option value="Este mes">Este mes</option>
      </select>
    </div>


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-whites">
      <div className="bg-green-400 text-white p-4 rounded text-left">
        <h4 className="text-2xl font-bold">30</h4>
        <p>Envíos</p>
      </div>
      <div className="bg-blue-500 text-white p-4 rounded text-left">
        <h4 className="text-2xl font-bold">23</h4>
        <p>Recojos</p>
      </div>
      <div className="bg-red-500 text-white p-4 rounded text-left">
        <h4 className="text-2xl font-bold">3</h4>
        <p>Cancelados</p>
      </div>
    </div>


    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse text-center">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border-b">Tag</th>
            <th className="p-2 border-b">Tipos</th>
            <th className="p-2 border-b">Total</th>
            <th className="p-2 border-b">Cantidad</th>
            <th className="p-2 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border-b">
              <span className="bg-green-400 text-green-400 px-1 rounded">Envíos</span>
            </td>
            <td className="p-2 border-b">Envíos</td>
            <td className="p-2 border-b">S/ 2100.00</td>
            <td className="p-2 border-b">30</td>
            <td className="p-2 border-b">
              <button className="bg-yellow-300 text-black px-4 py-1 rounded">Ver</button>
            </td>
          </tr>
          <tr>
            <td className="p-2 border-b">
              <span className="bg-blue-500 text-blue-500 px-1 rounded">Recojo</span>
            </td>
            <td className="p-2 border-b">Recojos</td>
            <td className="p-2 border-b">S/ 1804.50</td>
            <td className="p-2 border-b">23</td>
            <td className="p-2 border-b">
              <button className="bg-yellow-300 text-black px-4 py-1 rounded">Ver</button>
            </td>
          </tr>
          <tr>
            <td className="p-2 border-b">
              <span className="bg-red-500 text-red-500 px-1 rounded">Cancel</span>
            </td>
            <td className="p-2 border-b">Cancelados</td>
            <td className="p-2 border-b">S/ 130.00</td>
            <td className="p-2 border-b">3</td>
            <td className="p-2 border-b">
              <button className="bg-yellow-300 text-black px-4 py-1 rounded">Ver</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default LatestSalesTable;
