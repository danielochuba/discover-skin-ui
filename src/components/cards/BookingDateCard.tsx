import React from 'react';

interface BookingDateCardProps {
    date: string;
    time: string;
    price: number;
    currency?: string;
    onSelect: () => void;
}

const BookingDateCard: React.FC<BookingDateCardProps> = ({ date, time, price, currency = "$", onSelect }) => {
    return (
        <div className="flex flex-col gap-3 bg-secondary bg-opacity-10 rounded-lg p-3 flex-shrink-0 ">
            <div className='flex flex-col gap-1'>
                <p className="text-scale font-semibold text-md">{date}</p>
                <p className="text-gray-600 text-[16px]">{time}</p>
            </div>
            <span className="flex items-center gap-1">
                <p className='text-md font-bold'>{currency}{price}</p>
                <p>/ person</p>
            </span>
            <p className="text-secondary font-semibold underline cursor-pointer text-sm" onClick={onSelect}>
                Select Date
            </p>
        </div>
    );
};

export default BookingDateCard;