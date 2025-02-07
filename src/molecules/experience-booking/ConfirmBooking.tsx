import React, { useState } from "react";

const BookingConfirmation = () => {
    const [participants,] = useState(3);

    return (
        <div className="max-w-md mx-auto bg-white p-5 rounded-lg shadow-md">
            {/* Experience Details */}
            <h2 className="text-lg font-semibold">Everything look good?</h2>
            <p className="text-gray-600 text-sm">Take a moment to review your details before confirming your spot.</p>
            <div className="flex items-center gap-3 mt-4">
                <img
                    src="/experience-image.jpg"
                    alt="Experience"
                    className="w-16 h-16 rounded-lg"
                />
                <div>
                    <h3 className="text-sm font-semibold">Island Flavors - Traditional Cooking Class</h3>
                    <p className="text-gray-500 text-xs">with Chef Amari Baptiste</p>
                </div>
            </div>

            {/* Experience Details Section */}
            <div className="bg-gray-100 p-3 mt-4 rounded-md">
                <p className="text-sm text-gray-600">Your Experience Details</p>
                <p className="text-sm font-semibold">Saturday, November 23</p>
                <p className="text-xs text-gray-500">12:00PM - 5:00PM EST</p>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-sm">Number of Participants</p>
                    <button className="text-teal-600 text-sm font-semibold">Edit</button>
                </div>
                <p className="text-xs text-gray-500">You + {participants - 1} others</p>
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

            {/* Continue Button */}
            <button className="w-full bg-teal-700 text-white py-2 mt-4 rounded-md font-semibold hover:bg-teal-800">
                Continue to make payment
            </button>
        </div>
    );
};

export default BookingConfirmation;
