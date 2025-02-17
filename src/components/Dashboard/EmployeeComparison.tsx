import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const EmployeeComparison = () => {
  const data = {
    labels: ["Empleado 1", "Empleado 2"],
    datasets: [
      {
        data: [194, 67],
        backgroundColor: ["rgba(0, 188, 212, 0.6)", "rgba(30, 58, 138, 0.6)"],
        borderColor: ["#00bcd4", "#1e3a8a"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white rounded shadow border border-black">
      {/* Header */}
      <div className="bg-AzulSidebar text-white p-4 rounded-t">
        <h3 className="font-bold text-lg sm:text-xl">Comparación entre empleados</h3>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col items-center space-y-6 sm:space-y-4">

        {/* Selects for Employees */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
          <select className="bg-[#00bcd4] text-white font-bold px-4 py-2 rounded w-full sm:w-auto">
            <option>Empleado 1</option>
            <option>Empleado 2</option>
            <option>Empleado 3</option>
          </select>
          <select className="bg-[#1e3a8a] text-white font-bold px-4 py-2 rounded w-full sm:w-auto">
            <option>Empleado 2</option>
            <option>Empleado 1</option>
            <option>Empleado 3</option>
          </select>
        </div>

        {/* Button to switch employee comparison */}
        <button className="w-10 h-10 bg-white border rounded shadow text-center text-black mt-4 sm:mt-0">
          &lt;
        </button>

        {/* Doughnut Chart */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-40 md:h-40">
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeComparison;
