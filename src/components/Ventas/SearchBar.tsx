import { FaSearch } from 'react-icons/fa'; 

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="flex items-center border border-gray-500 rounded-lg p-2 w-full md:w-auto" style={{ maxWidth: "400px" }}>
      <input
        type="text"
        placeholder="Buscar por código"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full outline-none truncate"
      />
      <button>
        <FaSearch className="text-gray-500 ml-8" /> 
      </button>

    </div>
  );
}

export default SearchBar;
