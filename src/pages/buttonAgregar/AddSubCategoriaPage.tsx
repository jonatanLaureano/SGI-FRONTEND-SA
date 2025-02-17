import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Dashboard/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function AddSubCategoriaPage() {
  const navigate = useNavigate();
  
  // Estados para los inputs
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [loading, setLoading] = useState(false); // Para indicar si la petición está en curso

  // Maneja el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {

      alert("Subcategoría agregada correctamente");
      navigate("/categorizacion/subcategoria"); // Redirigir a la tabla
    } catch (error) {
      alert("Error al agregar subcategoría");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Maneja la cancelación
  const handleCancel = () => {
    navigate("/categorizacion/subcategoria");
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-white overflow-auto">
        <Header />
        <div className="p-4 flex items-center justify-center mt-32 h-100">
          <div className="bg-AzulSidebar p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-white text-center text-2xl font-semibold mb-6">
              Agregar subcategoría
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-white block mb-1">ID</label>
                <input
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="text-white block mb-1">Nombre</label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="text-white block mb-1">Categoría</label>
                <input
                  type="text"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  className="bg-botonAgregar text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600"
                  disabled={loading}
                >
                  {loading ? "Guardando..." : "Guardar"}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600"
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
}



  