import React from "react";
import { FaSearch } from "react-icons/fa";

interface TypeSearchProps {
    searchtype: string;
   onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
 }

 const TypeSearch: React.FC<TypeSearchProps> = ({ searchtype, onchange }) => {
     return (
         <div className="flex items-center border border-gray-500 rounded-lg p-2 w-full md:w-auto" style={{ maxWidth: "400px" }}>
         <input
             type="text"
             placeholder="Buscar por nombre"
             value={searchtype}
             onChange={onchange}
             className="w-full outline-none truncate"
         />
         <button>
             <FaSearch className="text-gray-500 ml-8" />
         </button>
         </div>
     );
     };

export default TypeSearch; 