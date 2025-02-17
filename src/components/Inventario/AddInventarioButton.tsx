import { useNavigate } from "react-router-dom";

const AddInventarioButton = () => {
  const navigate = useNavigate();

  const AddInventarioPage = () => {
    navigate("/inventario/agregar");
  };

  return (
    <div className="flex gap-5 w-full md:w-auto ml-auto">
      <button
        onClick={AddInventarioPage}
        className="bg-botonAgregar text-white px-4 py-2 rounded-lg font-semibold">
        Agregar
      </button>
    </div>
  );
};

export default AddInventarioButton;
