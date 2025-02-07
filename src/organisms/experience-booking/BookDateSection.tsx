import SelectDate from '@/molecules/experience-booking/SelectDate';
import React from 'react';

interface BookDateSectionProps {
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
}

const BookDateSection: React.FC<BookDateSectionProps> = ({ setStep, step }) => {
    return (

        <SelectDate step={step} setStep={setStep} />
    );
};

export default BookDateSection;