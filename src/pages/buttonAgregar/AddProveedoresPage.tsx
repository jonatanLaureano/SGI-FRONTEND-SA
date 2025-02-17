import Header from "../../components/Dashboard/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

const AddProveedoresPage = () => {

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-white overflow-auto">
        <Header />
        <div className="p-4 flex items-center justify-center mt-32 h-100">
          <div className="bg-AzulSidebar text-white p-6 rounded-lg shadow-md w-full max-w-lg">
            <h2 className="text-center text-2xl font-semibold mb-4">Agregar Proveedores</h2>
            <form className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">ID</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-md text-black"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">RUC</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-md text-black"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Nombre</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-md text-black"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Teléfono</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-md text-black"
                />
              </div>
              <div className="col-span-2 flex justify-center gap-4 mt-4">
                <button type="submit" className="bg-botonAgregar px-4 py-2 rounded hover:bg-green-600">
                  Guardar
                </button>
                <button type="button" className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
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

export default AddProveedoresPage;

  