interface StatusFilterProps {
    value: string;
    onChange: (value: string) => void;
  }
  
  const StatusFilter = ({ value, onChange }: StatusFilterProps) => {
    return (
      <div className="flex items-center border border-gray-500 rounded-lg p-2 w-full md:w-auto" style={{ maxWidth: "400px" }}>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full outline-none truncate"
        >
          <option value="">Todos los estados</option>
          <option value="pagado">Pagado</option>
          <option value="entregado">Entregado</option>
          <option value="cancelado">Cancelado</option>
          <option value="pendiente">Pendiente</option>
        </select>
      </div>
    );
  }
  
  export default StatusFilter;