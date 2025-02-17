interface DeliveryFilterProps {
  value: string;
  onChange: (value: string) => void;
}

const DeliveryFilter = ({ value, onChange }: DeliveryFilterProps) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 border rounded-lg"
    >
      <option value="">Filtro por entrega</option>
      <option value="envio">Envío</option>
      <option value="recojo">Recojo</option>
    </select>
  );
}

export default DeliveryFilter;