import React from 'react';

interface DropdownTabProps {
    label: string;
    options: string[];
    isOpen: boolean;
    toggleDropdown: () => void;
    onSelect: (value: string) => void;
}

const DropdownTab: React.FC<DropdownTabProps> = ({ label, options, isOpen, toggleDropdown, onSelect }) => {
    return (
        <div className="relative"> {/* Ensure relative positioning */}
            {/* Dropdown Button */}
            <button
                className="flex items-center px-3 py-2 rounded-full border border-gray-300 text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none"
                onClick={toggleDropdown}
            >
                {label}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 ml-2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-[9999]">
                    {options.map((option) => (
                        <li
                            key={option}
                            className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                            onClick={() => onSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownTab;
