import React from 'react';
import BookingSelectDateCard from '@/components/cards/BookingSelectDateCard';
interface BookDateSectionProps {
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
}

const SelectDate: React.FC<BookDateSectionProps> = ({ step, setStep }) => {
    const slots = [
        {
            date: "19",
            month: 'NOV',
            day: "TUE",
            slots: [
                { time: "12:00PM - 5:00PM EST", price: 65, spotsLeft: 15, },
                { time: "12:00PM - 5:00PM EST", price: 65, spotsLeft: 0, },
                { time: "12:00PM - 5:00PM EST", price: 65, spotsLeft: 15, }
            ]
        },
        {
            date: "20",
            month: 'DEC',
            day: "WED",
            slots: [
                { time: "1:00PM - 6:00PM EST", price: 70, spotsLeft: 0, },
                { time: "1:00PM - 6:00PM EST", price: 70, spotsLeft: 10, }

            ]
        }
    ];

    return (
        <div>
            <div className="flex flex-col items-center gap-3">
                <h3 className="text-lg font-semibold">Select Your Experience Date & Time</h3>
                <p className="text-gray-500 text-sm">Choose from the available dates and times below to book your session.</p>
            </div>

            {slots.map((slot, index) => (
                <BookingSelectDateCard key={index} slot={slot} step={step} setStep={setStep} />
            ))}
        </div>
    );
};

export default SelectDate;
