import React, { useState } from 'react';

interface InterestCardProps {
    title: string;
    imageUrl: string;
    isSelectable?: boolean;  // Enable/Disable feature
    containerClassName?: string;  // Custom class for the container
    imageClassName?: string;  // Custom class for the image
}

const InterestCard: React.FC<InterestCardProps> = ({
    title,
    imageUrl,
    isSelectable = true,
    containerClassName = '',  // Default to empty string if not provided
    imageClassName = '',  // Default to empty string if not provided
}) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleCardClick = () => {
        if (isSelectable) {
            setIsSelected((prev) => !prev);
        }
    };

    return (
        <div
            className={`group relative rounded-lg overflow-hidden  bg-white transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer ${containerClassName}`}
            onClick={handleCardClick}
        >
            <img
                src={imageUrl}
                alt={title}
                className={`w-full object-cover object-center transition-transform duration-300 group-hover:scale-110 ${isSelected ? 'opacity-50' : ''} ${imageClassName}`}
            />

            {isSelected && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
            )}


            <h3 className="text-[12px] font-semibold text-gray-900 mb-2 text-center">{title}</h3>

        </div>
    );
};

export default InterestCard;
