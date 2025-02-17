import Header from "../../components/Dashboard/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

const AddEmpleadosPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-white overflow-auto">
        <Header />
        <div className="p-4 flex items-center justify-center mt-32 h-100">
          <div className="bg-AzulSidebar text-white p-8 rounded-xl w-[700px]">
            <h2 className="text-center text-2xl font-bold mb-6">Agregar Inventario</h2>
            <form className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">ID</label>
                <input type="text" className="w-full p-2 rounded-md text-black" />
              </div>
              <div>
                <label className="block text-sm mb-1">Correo</label>
                <input type="email" className="w-full p-2 rounded-md text-black" />
              </div>
              <div>
                <label className="block text-sm mb-1">Nombres</label>
                <input type="text" className="w-full p-2 rounded-md text-black" />
              </div>
              <div>
                <label className="block text-sm mb-1">Status</label>
                <input type="text" className="w-full p-2 rounded-md text-black" />
              </div>
              <div className="col-span-2">
                <label className="block text-sm mb-1">Apellidos</label>
                <input type="text" className="w-full p-2 rounded-md text-black" />
              </div>
              <div className="col-span-2 flex justify-center gap-4 mt-4">
                <button type="submit" className="bg-green-500 px-6 py-2 rounded-md text-white">Guardar</button>
                <button type="button" className="bg-red-500 px-6 py-2 rounded-md text-white">Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddEmpleadosPage;
