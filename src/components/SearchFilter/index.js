import { useState } from "react";

const sortOptions = [
  { value: "new", label: "Recently Added" },
  { value: "price-low", label: "Price Low to High" },
  { value: "price-high", label: "Price High to Low" },
  { value: "name-asc", label: "Name Ascending" },
  { value: "name-desc", label: "Name Descending" },
];

const SearchFilter = ({ searchInput, setSearchInput, sortBy, setSortBy }) => {
    const [open, setOpen] = useState(false);
    const selectedLabel = sortOptions.find(opt => opt.value === sortBy)?.label || "Sort By";
    return (
        <div className="flex flex-col sm:flex-row items-center mb-6 gap-4">
            <input
                type="search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search for products..."
                className="
                            w-full max-w-md
                            px-4 py-3
                            border border-gray-500 rounded-xl
                            shadow-sm
                            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                            placeholder-gray-400
                            transition
                            duration-200
                        "
            />
            <div className="w-full sm:w-1/3 relative">
        <button
          onClick={() => setOpen(!open)}
          className="
            w-full px-4 py-3 border border-gray-500 rounded-xl shadow-sm bg-white flex justify-between items-center cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200
          "
        >
          {selectedLabel}
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>

        {open && (
          <ul className="absolute w-full bg-white border border-gray-300 rounded-xl shadow-md mt-1 z-10">
            {sortOptions.map(opt => (
              <li
                key={opt.value}
                className="px-4 py-3 cursor-pointer hover:bg-indigo-100"
                onClick={() => {
                  setSortBy(opt.value);
                  setOpen(false);
                }}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      
        </div>
    )
}

export default SearchFilter