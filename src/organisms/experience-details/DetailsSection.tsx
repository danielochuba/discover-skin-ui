import React from 'react';
import DetailsTop from '@/molecules/experience-details/DetailsTop';
import DetailsDates from '@/molecules/experience-details/DetailsDates';


const DetailsSection: React.FC = () => {
    return (
        <section>
            <DetailsTop />
            <div className="border-b border-gray-200"></div>
            <DetailsDates />
        </section>
    );
};

export default DetailsSection;