interface StatusFilterProps {
    value: string;
    onChange: (value: string) => void;
  }
  
  const StatusFilter = ({ value, onChange }: StatusFilterProps) => {
    return (
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-2 border rounded-lg w-48"
      >
        <option value="">Todos los estados</option>
        <option value="pagado">Pagado</option>
        <option value="entregado">Entregado</option>
        <option value="cancelado">Cancelado</option>
        <option value="pendiente">Pendiente</option>
      </select>
    );
  }
  
  export default StatusFilter;