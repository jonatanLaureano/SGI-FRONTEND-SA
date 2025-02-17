import { FaSearch } from "react-icons/fa";

interface AddressSearchProps {
  value: string;
  onChange: (event: string) => void;
}

const AddressSearch = ({ value, onChange }: AddressSearchProps) => {
  return (
    <div className="flex items-center border border-gray-500 rounded-lg p-2 w-full md:w-auto">
      <input
        type="text"
        placeholder="Buscar por dirección"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full outline-none truncate"
      />
      <button>
        <FaSearch className="text-gray-500 ml-8" />
      </button>
    </div>
  );
};

export default AddressSearch;