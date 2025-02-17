import { useNavigate } from "react-router-dom";

const AddClientesButton = () => {
  const navigate = useNavigate();

  const AddClientesPage = () => {
    navigate("/clientes/agregar");
  };

  return (
    <div className="flex gap-5 w-full md:w-auto ml-auto">
      <button
        onClick={AddClientesPage}
        className="bg-botonAgregar text-white px-4 py-2 rounded-lg font-semibold">
        Agregar
      </button>
    </div>
  );
};

export default AddClientesButton;
