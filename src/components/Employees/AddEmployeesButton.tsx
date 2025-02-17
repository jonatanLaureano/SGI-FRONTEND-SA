import { useNavigate } from "react-router-dom";

const AddEmployeesButton = () => {
  const navigate = useNavigate();

  const AddEmpleadosPage = () => {
    navigate("/empleados/agregar");
  };

  return (
    <div className="flex gap-5 w-full md:w-auto ml-auto">
      <button
        onClick={AddEmpleadosPage}
        className="bg-botonAgregar text-white px-4 py-2 rounded-lg font-semibold">
        Agregar
      </button>
    </div>
  );
};

export default AddEmployeesButton;
