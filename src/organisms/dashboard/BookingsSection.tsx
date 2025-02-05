import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import BookingsList from '@/molecules/dashboard/BookingsList';
import { FaArrowRight } from 'react-icons/fa6';

const BookingsSection: React.FC = () => {
    return (
        <section>
            <SectionHeading
                title="Upcoming Bookings"
                subtitle="Your Upcoming Adventures"
                sideContent={<FaArrowRight size={30} className='  bg-gray-200 rounded-full p-2' />} />
            <BookingsList />
        </section>
    );
};

export default BookingsSection;