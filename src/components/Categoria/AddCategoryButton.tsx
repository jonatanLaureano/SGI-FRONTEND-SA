import { useNavigate } from "react-router-dom";

const AddCategoryButton = () => {
  const navigate = useNavigate();

  const AddCategoriaPage = () => {
    navigate("/categorizacion/categoria/agregar");
  };

  return (
    <div className="flex gap-5 w-full md:w-auto ml-auto">
      <button
        onClick={AddCategoriaPage}
        className="bg-botonAgregar text-white px-4 py-2 rounded-lg font-semibold">
        Agregar
      </button>
    </div>
  );
};

export default AddCategoryButton;
