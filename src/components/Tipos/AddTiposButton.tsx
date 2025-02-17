import { useNavigate } from "react-router-dom";

const AddTiposButton = () => {
  const navigate = useNavigate();

  const AddTiposPage = () => {
    navigate("/categorizacion/tipos/agregar");
  };

  return (
    <div className="flex gap-5 w-full md:w-auto ml-auto">
      <button
        onClick={AddTiposPage}
        className="bg-botonAgregar text-white px-4 py-2 rounded-lg font-semibold">
        Agregar
      </button>
    </div>
  );
};

export default AddTiposButton;
