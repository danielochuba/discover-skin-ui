import React from 'react';
import BookingsCard from '@/components/cards/BookingsCard';
import bookings from '@/data/Bookings';

const BookingsList: React.FC = () => {
    return (
        <div className="overflow-x-auto whitespace-nowrap py-6">
            <div className="flex gap-2">
                {bookings.map((booking, index) => (
                    <div key={index} className="">
                        <BookingsCard {...booking} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookingsList;
