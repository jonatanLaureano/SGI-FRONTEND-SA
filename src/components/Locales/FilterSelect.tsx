interface FilterSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const FilterSelect = ({ value, onChange }: FilterSelectProps) => {
  return (
    <div className="flex items-center w-full md:w-auto">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 rounded-lg w-full pl-3 pr-10 border border-gray-500 text-gray-500"
      >
        <option value="">Filtrar por tipo</option>
        <option value="Almacén">Almacén</option>
        <option value="Tienda">Tienda</option>
      </select>
    </div>
  );
};

export default FilterSelect;