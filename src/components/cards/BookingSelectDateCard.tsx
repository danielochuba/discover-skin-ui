import React from 'react';

interface BookingSelectDateCardProps {

    slot: {
        date: string;
        month: string;
        day: string;
        slots: {
            time: string;
            price: number;
            spotsLeft: number;
        }[]
    }
}

const BookingSelectDateCard: React.FC<BookingSelectDateCardProps> = ({ slot }) => {
    return (
        <div className="flex  py-4 rounded-lg mb-4 gap-2 ">
            <div className="flex flex-col items-center bg-gray-200 p-2 pt-1 rounded-md h-fit">
                <p className="text-gray-500 bg-white text-sm ">{slot?.month}</p>
                <p className="text-lg font-bold">{slot?.date}</p>
                <p className="text-gray-500 text-sm">{slot?.day}</p>
            </div>
            <div className='w-full flex flex-col gap-3'>
                {
                    slot.slots.map((slot, index) => (
                        <div key={index} className='border p-2 rounded-md w-full'>
                            <div className="flex items-center gap-3">

                                <div className="flex-1 flex flex-col gap-2">
                                    <p className="text-sm text-gray-700 font-semibold">{slot?.time}</p>
                                    <p className="text-gray-700 text-sm font-bold">${slot?.price} <span className="text-gray-500">PER PERSON</span></p>
                                </div>
                                {slot.spotsLeft > 0 ? <span className="text-secondary text-sm">Available</span> : <span className="text-red-600 text-sm">Fully Booked</span>}

                            </div>
                            <div className="flex justify-between items-center mt-3">
                                {slot.spotsLeft > 0 && <button className="bg-teal-700 text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-teal-800">
                                    Choose Date
                                </button>
                                }
                                <p className="text-gray-500 text-sm">{slot?.spotsLeft} spots left</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BookingSelectDateCard;