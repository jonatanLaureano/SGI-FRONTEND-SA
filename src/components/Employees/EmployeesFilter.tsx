interface EmployeesFilterProps {
  status: string;
  onChange: (status: string) => void;
}

const EmployeesFilter: React.FC<EmployeesFilterProps> = ({ status, onChange }) => {
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex items-center border border-gray-500 rounded-lg p-2 w-full md:w-auto" style={{ maxWidth: "400px" }}>
      <select
        value={status}
        onChange={handleStatusChange}
        className="w-full outline-none truncate"
      >
        <option value="">Filtrar por status</option>
        <option value="Activo">Activo</option>
        <option value="Inactivo">Inactivo</option>
      </select>
    </div>
  );
};

export default EmployeesFilter;