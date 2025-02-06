import React from 'react';
import { FaCalendar } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FaMap } from "react-icons/fa";

const DetailsTop: React.FC = () => {
    return (
        <div className="bg-white rounded-lg  py-6 px-3 max-w-sm">

            {/* Title and Rating */}
            <div className="flex flex-col justify-between items-center mb-4">
                <div>
                    <h3 className="text-md font-semibold text-gray-800">Island Flavors - Traditional Cooking Class</h3>
                    <p className="text-nd font-semibold text-gray-800">with Chef Jeff. Ratatouille</p>
                </div>
                <div className="flex justify-center items-center gap-1">
                    <span className="text-black mr-1">★</span>
                    <span className="text-scale text-[16px]">4.65 (7,600)</span>
                    <p className="text-scale text-[16px]">South Friar's Bay Beach</p>
                </div>
            </div>

            {/* Location and Bookings */}
            <div className="mb-4">
                <p className="text-gray-600 text-sm">2,021 people booked next event</p>
            </div>

            {/* Image Placeholder (replace with actual image) */}
            <div className="mb-4 bg-gray-200 h-48 rounded-md">

                {/* <img src="/path/to/your/image.jpg" alt="Cooking Class" className="w-full h-full object-cover rounded-md" /> */}
            </div>

            {/* Description */}
            <div className="mb-4">
                <h3 className="text-md font-semibold text-gray-800">Experience Description</h3>
                <p className="text-scale text-sm">
                    Step into the heart of Saint Kitts and discover the secrets of Caribbean cooking in this hands-on, interactive class led by Chef Anaya, a local culinary expert with a passion for island flavors. Together, w...

                </p>
                <span className="text-secondary cursor-pointer underline">Show more</span>
            </div>

            <div className='bg-gray-200 flex flex-col gap-2 p-4 rounded-lg'>

                <h3 className="text-md font-semibold text-gray-800">Experience Details</h3>

                {/* Date and Time */}
                <div className=" flex flex-col gap-1 bg-white rounded-lg p-3">
                    <h4 className="text-[14px] text-scale flex items-center gap-2"><FaCalendar className='text-secondary' /> Next Date & Time</h4>
                    <p className="text-scale font-semibold text-md ">Saturday, November 23</p>
                    <p className="text-gray-600 text-[16px]">12:00PM-5:00PM EST</p>
                    <p className="text-secondary font-semibold underline cursor-pointer text-sm">See all available dates & time</p>
                </div>

                {/* Location Details */}
                <div className=" flex flex-col gap-1  bg-white rounded-lg p-3">
                    <h4 className="text-[14px] text-scale flex items-center gap-2"><FaMap className='text-secondary' />Location</h4>
                    <p className="text-scale font-semibold text-md ">Chef Anaya's Seaside Kitchen</p>
                    <p className="text-gray-600 text-[16px]">Basseterre, Saint Kitts</p>
                    <p className="text-secondary font-semibold underline cursor-pointer text-sm">See location</p>
                </div>


                {/* Host Details */}
                <div className=" flex flex-col gap-1  bg-white rounded-lg p-3">
                    <h4 className="text-[14px] text-scale flex items-center gap-2"><FaUser className='text-secondary' /> Hosted by</h4>
                    <p className="text-scale font-semibold text-md ">Jeffery. Ratatouille</p>
                    <p className="text-secondary font-semibold underline cursor-pointer text-sm">See location</p>
                </div>
            </div>

        </div>
    );
};

export default DetailsTop;