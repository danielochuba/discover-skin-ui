import Button from '@/atom/Button';
import BookingDateCard from '@/components/cards/BookingDateCard';
import React from 'react';

const DetailsDates: React.FC = () => {
    return (
        <div className="flex flex-col p-4">
            <h2 className="text-lg font-semibold">Choose from available dates</h2>
            <p className="text-gray-600 text-sm">12 available</p>
            <div className="flex overflow-x-auto space-x-2 scrollbar-hide scrollbar-hidden py-6 ">
                <BookingDateCard
                    date="Saturday, November 23"
                    time="12:00PM - 5:00PM EST"
                    price={62}
                    onSelect={() => console.log('Date Selected')}
                />
                <BookingDateCard
                    date="Saturday, November 23"
                    time="12:00PM - 5:00PM EST"
                    price={62}
                    onSelect={() => console.log('Date Selected')}
                />
                <BookingDateCard
                    date="Saturday, November 23"
                    time="12:00PM - 5:00PM EST"
                    price={62}
                    onSelect={() => console.log('Date Selected')}
                />
                <BookingDateCard
                    date="Saturday, November 23"
                    time="12:00PM - 5:00PM EST"
                    price={62}
                    onSelect={() => console.log('Date Selected')}
                />
            </div>
            <Button
                label="See all dates"
                handleClick={() => console.log('See all dates clicked')}
                buttonClassName='font-semibold text-secondary bg-transparent'
                containerClassName='text-center rounded-full bg-secondary bg-opacity-10 py-2 mx-5'
            />
        </div>
    );
};

export default DetailsDates;