import { useState } from "react";
import Header from "../../components/Dashboard/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { addCategory } from "../../services/categoryServices";
import { useNavigate } from "react-router-dom";

export default function AddCategoryPage() {
  const [formData, setFormData] = useState({ id: "", nombre: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "id" && !/^[0-9]*$/.test(value)) return;
    if (name === "nombre" && !/^[a-zA-Z\s]*$/.test(value)) return;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!formData.id || !formData.nombre) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    try {
      await addCategory({ id: Number(formData.id), nombre: formData.nombre });
      alert("Categoría agregada con éxito");
      navigate("/categorizacion/categoria");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error desconocido al agregar la categoría.");
      }
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-white overflow-auto">
        <Header />
        <div className="p-4 flex items-center justify-center mt-32 h-100">
          <div className="bg-AzulSidebar p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-white text-center text-xl font-bold mb-4">
              Agregar Categoría
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-white text-sm">ID</label>
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  className="w-full p-2 rounded border border-gray-300"
                  placeholder="Ingrese en números..."
                />
              </div>
              <div>
                <label className="block text-white text-sm">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full p-2 rounded border border-gray-300"
                  placeholder="Ingrese solo letras"
                />
              </div>
              {error && <p className="text-red-500 text-center">{error}</p>}
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-botonAgregar text-white px-4 py-2 rounded hover:bg-green-600">
                  Guardar
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/categorizacion/categoria")}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
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
