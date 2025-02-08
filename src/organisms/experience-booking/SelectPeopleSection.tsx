import React from 'react';
import SelectPeople from '@/molecules/experience-booking/SelectPeople';

const SelectPeopleSection: React.FC = () => {


    return (
        <div className='flex flex-col justify-between h-[90%]'>
            <SelectPeople />
        </div>
    );
};

export default SelectPeopleSection;