import Button from '@/atom/Button'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUserLarge } from "react-icons/fa6";

const ContinueAsGuest: React.FC = () => {

    const navigate = useNavigate()
    const handleClick = () => {
        console.log('Continue as guest')
        navigate('/home')
    }
    return (

        <Button
            icon={<FaUserLarge className='text-white' />}
            label='Continue as guest'
            buttonClassName=" text-white border-0 bg-transparent text-sm underline"
            containerClassName="absolute flex top-5 right-5 text-white items-center gap-2"
            handleClick={handleClick}
        />
    )
}

export default ContinueAsGuest