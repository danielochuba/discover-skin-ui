import SearchBar from '@/components/SearchBar';
import SectionHeading from '@/components/SectionHeading';
import UserImagePlaceholder from '@/components/UserImagePlaceholder';
import DropdownContainer from '@/molecules/dashboard/DropdownFilter';
import React from 'react';


const Header: React.FC = () => {
    return (
        <header className='flex flex-col gap-4 mt-4 relative'>
            <SectionHeading
                title="Experience SKIN"
                subtitle="Ready to experience more of SKIN?"
                sideContent={<UserImagePlaceholder />}
                containerClassName=''
            />

            <SearchBar />
            <DropdownContainer />
        </header>
    );
};

export default Header;