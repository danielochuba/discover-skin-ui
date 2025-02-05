import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import Interests from '@/molecules/dashboard/InterestsList';

const InterestSection: React.FC = () => {
    return (
        <section>
            <SectionHeading
                title="Browse by Interests"
                subtitle="Find Experiences ThatSpark Your Curiosity"
            />
            <Interests />
        </section>
    );
};

export default InterestSection;