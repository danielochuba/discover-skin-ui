import DetailsBottom from '@/molecules/experience-details/DetailsBottom';
import React from 'react';

const FooterSection: React.FC = () => {
    return (
        <footer>
            <DetailsBottom price={62} onSeeAllDates={() => console.log("See all dates clicked")} />
        </footer>
    );
};

export default FooterSection;