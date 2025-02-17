import React from "react";
import { FaSearch } from "react-icons/fa";

interface CategorySearchProps {
   searchCategory: string;
   onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
 }

const CategorySearch: React.FC<CategorySearchProps> = ({ searchCategory, onchange }) => {
    return (
        <div className="flex items-center border border-gray-500 rounded-lg p-2 w-full md:w-auto" style={{ maxWidth: "400px" }}>
        <input
            type="text"
            placeholder="Buscar por nombre"
            value={searchCategory}
            onChange={onchange}
            className="w-full outline-none truncate"
        />
        <button>
            <FaSearch className="text-gray-500 ml-8" />
        </button>
        </div>
    );
    };

export default CategorySearch;