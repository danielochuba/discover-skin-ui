import Button from '@/atom/Button'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUserLarge } from "react-icons/fa6";
import ApplicationRoutes from '@/config/routes';

const ContinueAsGuest: React.FC = () => {

    const navigate = useNavigate()
    const handleClick = () => {
        console.log('Continue as guest')
        navigate(ApplicationRoutes.USER.DASHBOARD)
    }
    return (

        <Button
            icon={<FaUserLarge className='text-white' />}
            label='Continue as Guest'
            buttonClassName=" text-white border-0 bg-transparent text-sm underline Z-50"
            containerClassName="absolute flex top-5 right-5 text-white items-center gap-2"
            handleClick={handleClick}
        />
    )
}

export default ContinueAsGuest