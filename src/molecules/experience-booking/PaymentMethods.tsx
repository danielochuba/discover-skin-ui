import React from "react";
import { FaArrowRight, FaCcMastercard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";


const PaymentMethods = () => {
    const paymentOptions = [
        { id: 1, name: "Credit or Debit Card", icon: <FaCcMastercard size={24} /> },
        { id: 2, name: "Paypal", icon: <FaPaypal size={24} /> },
        { id: 3, name: "Local Bank Transfer", icon: <FaUniversity size={24} /> },
    ];

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg">
            <h3 className="text-lg font-semibold">Select your preferred payment method – Secure your spot</h3>
            <p className="text-gray-500 text-sm mb-4">
                Choose your preferred way to pay. We ensure your payment is safe, secure, and hassle-free.
            </p>
            <div className="space-y-3">
                {paymentOptions.map((option) => (
                    <div
                        key={option.id}
                        className="flex items-center justify-between py-4 px-0  cursor-pointer hover:bg-gray-100"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-xl">{option.icon}</span>
                            <span className="text-gray-700 font-medium">{option.name}</span>
                        </div>
                        <FaArrowRight size={30} className='  bg-gray-200 rounded-full p-2' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PaymentMethods;
