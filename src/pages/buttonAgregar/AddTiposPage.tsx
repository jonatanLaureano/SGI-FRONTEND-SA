import Header from "../../components/Dashboard/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

const AddTiposPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-white overflow-auto">
        <Header />
        <div className="p-4 flex items-center justify-center mt-32 h-100">
          <div className="bg-AzulSidebar text-white p-8 rounded-xl w-[600px]">
            <h2 className="text-center text-2xl font-bold mb-6">Agregar tipos</h2>
            <form className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">ID</label>
                <input type="text" className="w-full p-2 rounded-md text-black" />
              </div>
              <div>
                <label className="block text-sm mb-1">Subcategoría</label>
                <input type="text" className="w-full p-2 rounded-md text-black" />
              </div>
              <div>
                <label className="block text-sm mb-1">Nombre</label>
                <input type="text" className="w-full p-2 rounded-md text-black" />
              </div>
              <div>
                <label className="block text-sm mb-1">Categoría</label>
                <input type="text" className="w-full p-2 rounded-md text-black" />
              </div>
              <div className="col-span-2 flex justify-center gap-4 mt-4">
                <button type="submit" className="bg-botonAgregar px-6 py-2 rounded-md text-white hover:bg-green-600">
                  Guardar
                </button>
                <button type="button" className="bg-red-500 px-6 py-2 rounded-md text-white hover:bg-red-600">
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

export default AddTiposPage;
