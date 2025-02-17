import { useNavigate } from "react-router-dom";

const AddLocalesButton = () => {
  const navigate = useNavigate();

  const AddLocalesPage = () => {
    navigate("/locales/agregar");
  };

  return (
    <div className="flex gap-5 w-full md:w-auto ml-auto">
      <button
        onClick={AddLocalesPage}
        className="bg-botonAgregar text-white px-4 py-2 rounded-lg font-semibold">
        Agregar
      </button>
    </div>
  );
};

export default AddLocalesButton;
