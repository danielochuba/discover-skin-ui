import React from 'react';
import { FaStar } from 'react-icons/fa';
import SaveIcon from '../Bookmark';

interface ExperienceCardProps {
    experience: {
        id: string;
        image: string;
        ratings: number;
        numberOfRatings: number;
        location: string;
        title: string;
        price: string;
    };
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    const { ratings, numberOfRatings, location, title, price, image, id } = experience;

    const handleSave = (id: string) => () => {
        console.log('Saved: ', id);
    };

    return (
        <div className="experience-card bg-white shadow-lg rounded-lg overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-xl w-[224px]">
            {/* Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-t-lg"
            />

            {/* Save Icon */}
            <div className="absolute top-2 right-2 p-2 bg-transparent shadow-lg rounded-full ">
                <SaveIcon className='bg-transparent text-gray-500 ' onClick={handleSave(id)} />
            </div>

            {/* Card Details */}
            <div className="p-4 flex flex-col justify-between h-full">
                {/* Ratings */}
                <div className="flex items-center justify-between px">
                    <div className="flex items-center">
                        <FaStar className="mr-1" />
                        <span className='text-scale'>{ratings}</span>
                        <span className="text-scale ml-1">({numberOfRatings})</span>
                    </div>
                    <span className="text-scale text-2xl mb-2">.</span>
                    {/* Location */}
                    <div className="text-scale text-sm">{location}</div>
                </div>

                {/* Title */}
                <div className="text-[16px] font-semibold mt-2">{title}</div>

                {/* Price */}
                <div className="text-[14px] mt-2"><p>From ${price} per person</p></div>
            </div>
        </div>
    );
};

export default ExperienceCard;
