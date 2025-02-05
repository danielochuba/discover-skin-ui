import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState('');

    return (
        <div className="flex items-center justify-between w-full max-w-md mx-auto p-2 border border-gray-300 rounded-full bg-white">
            {/* Search Icon and Input */}
            <div className="flex items-center space-x-2">

                <CiSearch className="w-8 h-8 text-gray-500 " />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search activities or events..."
                    className="w-full bg-transparent focus:outline-none text-gray-500 placeholder-gray-400"
                />
            </div>

            {/* Side Menu Icon */}
            <button className="p-2 rounded-full hover:bg-gray-200"
                type='button'
                name='search'
                title='search'
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
        </div>
    );
};

export default SearchBar;
