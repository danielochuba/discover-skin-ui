import Button from '@/atom/Button';
import ApplicationRoutes from '@/config/routes';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface DetailsBottomProps {
    price: number;
    currency?: string;
}

const DetailsBottom: React.FC<DetailsBottomProps> = ({ price, currency = "$" }) => {

    const { id } = useParams();
    const navigate = useNavigate();

    const onSeeAllDates = () => {
        if (id) {
            navigate(ApplicationRoutes.EXPERIENCES.RESERVE.replace(':id', id.toString()));
        }
        console.log("See all dates clicked", id);
    }

    return (
        <div className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-sm">
            <div>
                <p className="text-gray-600 text-sm">Starting Price</p>
                <p className="text-lg font-bold">
                    {currency}{price} <span className="text-gray-500 font-normal text-sm">/ person</span>
                </p>
            </div>
            <Button
                label='See all dates'
                handleClick={onSeeAllDates}
                buttonClassName=" text-white text-sm font-semibold py-2 px-4 bg-transparent"
                containerClassName='bg-secondary  hover:bg-teal-800 rounded-full'
            />

        </div>
    );
};

export default DetailsBottom;
