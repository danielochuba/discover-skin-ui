import React from 'react';
import { FaClock } from "react-icons/fa";

interface BookingsCardProps {
    backgroundImage: string;
    location: string;
    title: string;
    time: string;
    cardClassName?: string; // Allows customization of card styles
    contentClassName?: string; // Allows customization of content section styles
    badgeClassName?: string; // Allows customization of the badge style
}

const BookingsCard: React.FC<BookingsCardProps> = ({
    backgroundImage,
    location,
    title,
    time,
    cardClassName = 'relative  bg-top rounded-lg shadow-lg',
    contentClassName = 'absolute bottom-4 left-4 text-white',
    badgeClassName = 'absolute top-4 left-4 bg-white flex items-center font-bold text-secondary text-sm  py-1 px-3 rounded-full gap-1'
}) => {
    return (
        <div
            className={`${cardClassName} w-[220px] bg-no-repeat`}
            style={{ backgroundImage: `url(${backgroundImage})`, height: '300px', backgroundSize: '100%' }} // Set a fixed height for the card
        >

            <span className={`${badgeClassName} text-secondary`}><FaClock className='' /> Starts in 2 days</span>
            <div className={`${contentClassName}`}>
                <h3 className="text-lg font-semibold">{location}</h3>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-sm">{time}</p>
            </div>
        </div>
    );
};

export default BookingsCard;
