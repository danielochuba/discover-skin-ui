import NavIcons from '@/molecules/experience-details/NavIcons';
import React from 'react';
import experience from '@/assets/images/experience.png';

// interface HeaderProps {
//     title: string;
//     subtitle?: string;
// }



const Header: React.FC = () => {
    return (
        <header style={{ backgroundImage: `url(${experience})`, backgroundSize: 'cover' }} className='relative h-96 bg-center bg-cover bg-no-repeat'>
            <NavIcons />
        </header>
    );
};

export default Header;