import { useNavigate } from "react-router-dom";

const AddProveedoresButton = () => {
  const navigate = useNavigate();

  const AddProveedoresPage = () => {
    navigate("/proveedores/agregar");
  };

  return (
    <div className="flex gap-5 w-full md:w-auto ml-auto">
      <button
        onClick={AddProveedoresPage}
        className="bg-botonAgregar text-white px-4 py-2 rounded-lg font-semibold">
        Agregar
      </button>
    </div>
  );
};

export default AddProveedoresButton;
