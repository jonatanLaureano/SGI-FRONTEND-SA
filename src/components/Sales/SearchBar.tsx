import { FaSearch } from 'react-icons/fa'; 

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Buscar por código"
        className="pl-10 pr-4 py-2 border rounded-lg w-64"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <FaSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" /> 
    </div>
  );
}

export default SearchBar;
