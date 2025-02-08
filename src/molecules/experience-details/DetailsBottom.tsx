import React from 'react';

interface DetailsBottomProps {
    price: number;
    currency?: string;
    onSeeAllDates: () => void;
}

const DetailsBottom: React.FC<DetailsBottomProps> = ({ price, currency = "$", onSeeAllDates }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-sm">
            <div>
                <p className="text-gray-600 text-sm">Starting Price</p>
                <p className="text-lg font-bold">
                    {currency}{price} <span className="text-gray-500 font-normal text-sm">/ person</span>
                </p>
            </div>
            <button
                onClick={onSeeAllDates}
                className="bg-secondary text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-teal-800"
            >
                See all dates
            </button>
        </div>
    );
};

export default DetailsBottom;
