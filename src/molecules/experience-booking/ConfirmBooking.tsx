import React, { useState } from "react";
import experience from '@/assets/images/experience.png';
import { FaStar } from "react-icons/fa6";

const BookingConfirmation = () => {
    const [participants,] = useState(3);

    return (
        <div className="max-w-md mx-auto  bg-white p-5 rounded-lg ">
            {/* Experience Details */}
            <h2 className="text-lg font-semibold">Everything look good?</h2>
            <p className="text-gray-600 text-sm">Take a moment to review your details before confirming your spot.</p>
            <div className="flex items-center gap-3 mt-4">
                <img
                    src={experience}
                    alt="Experience"
                    className="w-24 h-auto rounded-lg bg-cover object-cover"
                />

                <div className="p-4 flex flex-col justify-between h-full">
                    <h3 className="text-sm font-semibold">Island Flavors - Traditional Cooking Class with Chef Amari Baptiste</h3>
                    {/* Ratings */}
                    <div className="flex flex-col ">
                        <div className="flex items-center">
                            <FaStar className="mr-1" />
                            <span className='text-scale'>4.65</span>
                            <span className="text-scale ml-1">(7,600)</span>
                        </div>

                        {/* Location */}
                        <div className="text-scale text-sm">South Friar's Bay Beach</div>
                    </div>


                </div>
            </div>

            {/* Experience Details Section */}
            <div className="flex flex-col gap-3 bg-gray-100 p-3 mt-4 rounded-md">
                <h2 className="text-sm text-gray-600">Your Experience Details</h2>
                <div className="bg-white p-3 rounded-md">
                    <p className="text-scale text-sm mb-2">Next and Date & Time</p>
                    <p className="text-sm font-semibold mb-1">Saturday, November 23</p>
                    <p className="text-xs text-gray-500">12:00PM - 5:00PM EST</p>
                </div>
                <div className="bg-white p-3 rounded-md">
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-sm">Number of Participants</p>
                        <button className="text-secondary underline text-sm font-semibold">Edit</button>
                    </div>
                    <p className="font-semibold text-sm"> {participants} Participants</p>
                    <p className="text-xs text-gray-500">You + {participants - 1} others</p>
                </div>
            </div>

            {/* Price Details */}
            <div className="mt-4">
                <h3 className="text-sm text-gray-600">Price Details</h3>
                <div className="flex justify-between text-sm font-semibold">
                    <p>$65 x {participants} people</p>
                    <p>${participants * 65}</p>
                </div>
                <div className="flex justify-between text-sm mt-2">
                    <p className="text-gray-500">Promo Code</p>
                    <button className="text-teal-600 font-semibold">Apply</button>
                </div>
                <div className="flex justify-between text-sm font-semibold mt-2">
                    <p>TOTAL (USD)</p>
                    <p>${participants * 65}</p>
                </div>
            </div>

            {/* Cancellation Policy */}
            <p className="text-xs text-gray-500 mt-3">
                Cancel at least 48 hours in advance to receive a full refund.
            </p>


        </div>
    );
};

export default BookingConfirmation;
