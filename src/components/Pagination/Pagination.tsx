import { useState } from "react";

interface PaginationProps {
  totalPages: number;
  onPageChange: (page: number) => void; 
}

const Pagination = ({ totalPages, onPageChange }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center items-center mt-10 space-x-2">

      <button
        className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-200"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>

      {[...Array(totalPages).keys()].slice(0, 15).map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            className={`px-3 py-2 border ${
              currentPage === page ? "bg-AzulSidebar text-white" : "border-gray-300"
            } rounded hover:bg-gray-200`}
            onClick={() => goToPage(page)}
          >
            {page}
          </button>
        );
      })}

      <span className="px-3 py-2 border border-gray-300 rounded">...</span>

      <button
        className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-200"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
