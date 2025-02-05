import Button from '@/atom/Button';
import React from 'react';
import PreviewLogo from '@/assets/images/logo-preview.png';

const Preview: React.FC = () => {
    return (
        <div className='bg-white'>
            <img src={PreviewLogo} alt="Discover St. Kitts & Nevis" className="mx-auto w-28" />
            <h1>Enjoy a preview of Experience SKN</h1>
            <p>Get the full Experience! To book, save favorites, and leave reviews, create an account.</p>
            <Button
                label='Continue as Guest'
                containerClassName='bg-secondary text-white rounded-full'
            />
            <Button
                label='Create Account'
                containerClassName='bg-secondary bg-opacity-40 text-secondary rounded-full'
            />
        </div>
    );
};

export default Preview;