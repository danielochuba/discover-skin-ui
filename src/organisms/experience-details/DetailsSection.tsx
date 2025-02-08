import React from 'react';
import DetailsTop from '@/molecules/experience-details/DetailsTop';
import DetailsDates from '@/molecules/experience-details/DetailsDates';
import ChefProfileCard from '@/components/cards/ChefProfileCard';


const DetailsSection: React.FC = () => {
    return (
        <section>
            <DetailsTop />
            <div className="border-b border-gray-200"></div>
            <DetailsDates />
            <div className="border-b border-gray-200"></div>
            <ChefProfileCard />
        </section>
    );
};

export default DetailsSection;