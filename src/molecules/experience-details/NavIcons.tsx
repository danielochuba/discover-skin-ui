import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { FaShareAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

// interface NavIconProps {
//     icon: React.ReactNode;
//     label: string;
//     onClick: () => void;
// }

const NavIcons: React.FC = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }
    return (
        <div className='absolute top-11 px-5 w-full flex justify-between items-center'>

            <FaArrowLeft size={30} className='  bg-gray-200 rounded-full p-2' onClick={handleBack} />
            <FaShareAlt size={30} className='  bg-gray-200 rounded-full p-2' />
        </div>
    );
};

export default NavIcons;