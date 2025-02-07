import Button from '@/atom/Button';
import React, { useState } from 'react';
import jefferey from '@/assets/images/jefferey.png';
import { FaUser } from 'react-icons/fa';


const SelectPeople: React.FC = () => {
    const [count, setCount] = useState(1);

    const increaseCount = () => {
        setCount((prev) => prev + 1);
    };

    const decreaseCount = () => {
        if (count > 1) {
            setCount((prev) => prev - 1);
        }
    };
    return (
        <div className='flex flex-col items-center space-y-4 h justify-center gap-20'>
            <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold">Select Your Experience Date & Time</h3>
                <p className="text-gray-500 text-sm">Choose from the available dates and times below to book your session.</p>
            </div>
            <div className='flex flex-col items-center gap-3'>
                <div className="relative flex items-center space-x-2 mb-4 ">
                    <img src={jefferey} alt="Participant" className="w-16 h-16 rounded-md border" />
                    {count > 1 && (
                        <div className="relative  justify-center items-center ">
                            <FaUser size={12} className='w-16 h-16 -mx-4 rounded-md border' />
                            <span className="absolute -top-2 -right-16 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full w-[90px]">
                                +{count - 1} people
                            </span>
                        </div>
                    )}
                </div>

                {/* Counter Controls */}
                <div className="flex items-center space-x-4">
                    <Button
                        containerClassName='bg-secondary bg-opacity-10 h-10 w-10 rounded-lg flex justify-center items-center '
                        buttonClassName="bg-transparent text-3xl"
                        handleClick={decreaseCount}
                        label='-'
                    />

                    <p className="text-lg font-semibold">{count != 1 ? count : `Solo( ${count} )`}</p>
                    <Button
                        containerClassName='bg-secondary h-10 w-10 rounded-lg flex justify-center items-center '
                        buttonClassName=" text-white bg-transparent text-2xl"
                        label="+"
                        handleClick={increaseCount}

                    />

                </div>
            </div>

        </div>
    );
};

export default SelectPeople;