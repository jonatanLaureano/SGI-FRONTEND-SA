interface DeliveryFilterProps {
  value: string;
  onChange: (value: string) => void;
}

const DeliveryFilter = ({ value, onChange }: DeliveryFilterProps) => {
  return (
    <div className="flex items-center border border-gray-500 rounded-lg p-2 w-full md:w-auto" style={{ maxWidth: "400px" }}>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full outline-none truncate"
    >
      <option value="">Filtro por entrega</option>
      <option value="envio">Envío</option>
      <option value="recojo">Recojo</option>
    </select>
    </div>
  );
}

export default DeliveryFilter;