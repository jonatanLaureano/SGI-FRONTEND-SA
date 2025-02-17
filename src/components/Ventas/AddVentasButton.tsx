import { useNavigate } from "react-router-dom";

const AddVentasButton = () => {
  const navigate = useNavigate();

  const AddVentasPage = () => {
    navigate("/ventas/agregar");
  };

  return (
    <div className="flex gap-5 w-full md:w-auto ml-auto">
      <button
        onClick={AddVentasPage}
        className="bg-botonAgregar text-white px-4 py-2 rounded-lg font-semibold">
        Agregar
      </button>
    </div>
  );
};

export default AddVentasButton;