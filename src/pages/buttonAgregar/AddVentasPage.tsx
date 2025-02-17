import Header from "../../components/Dashboard/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

const AddVentasPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-white overflow-auto">
        <Header />
        <div className="p-4 flex items-center justify-center mt-32 h-100">
          <div className="bg-blue-900 p-8 rounded-xl shadow-lg w-full max-w-3xl">
            <h2 className="text-white text-center text-2xl font-semibold mb-6">
              Agregar Ventas
            </h2>
            <form className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm mb-1">Código de Venta</label>
                <input type="text" className="w-full p-2 rounded bg-white text-black" />
              </div>
              <div>
                <label className="block text-white text-sm mb-1">Tipo Entrega</label>
                <input type="text" className="w-full p-2 rounded bg-white text-black" />
              </div>
              <div>
                <label className="block text-white text-sm mb-1">Monto Total</label>
                <input type="text" className="w-full p-2 rounded bg-white text-black" />
              </div>
              <div>
                <label className="block text-white text-sm mb-1">Encargado</label>
                <input type="text" className="w-full p-2 rounded bg-white text-black" />
              </div>
              <div>
                <label className="block text-white text-sm mb-1">Status</label>
                <input type="text" className="w-full p-2 rounded bg-white text-black" />
              </div>
              <div>
                <label className="block text-white text-sm mb-1">Cliente</label>
                <input type="text" className="w-full p-2 rounded bg-white text-black" />
              </div>
              <div className="col-span-2 flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-6 rounded-lg mx-2"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  className="bg-red-500 text-white py-2 px-6 rounded-lg mx-2"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddVentasPage;

  