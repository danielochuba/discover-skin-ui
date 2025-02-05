import DropdownTab from '@/components/DropDownTab';
import React, { useState } from 'react';

const dropdownOptions = {
    Category: ['Tools', 'Services', 'Products', 'Others'],
    Pricing: ['Low to High', 'High to Low', 'Free'],
    Rating: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
};

const DropdownContainer: React.FC = () => {
    const [, setSelectedValues] = useState<{ [key: string]: string }>({});
    const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Track open dropdown

    const handleSelect = (label: string, value: string) => {
        setSelectedValues((prevState) => ({
            ...prevState,
            [label]: value,
        }));
        setOpenDropdown(null); // Close dropdown after selection
    };

    return (
        <div className="relative z-[9999]"> {/* Ensure dropdowns are visible */}
            <div className="flex gap-4 overflow-visible"> {/* Remove overflow issues */}
                {Object.entries(dropdownOptions).map(([label, options]) => (
                    <DropdownTab
                        key={label}
                        label={label}
                        options={options}
                        isOpen={openDropdown === label}
                        toggleDropdown={() =>
                            setOpenDropdown(openDropdown === label ? null : label)
                        }
                        onSelect={(value) => handleSelect(label, value)}
                    />
                ))}
            </div>
        </div>
    );
};

export default DropdownContainer;
