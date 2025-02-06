import React, { useEffect } from 'react';
import Header from '@/organisms/experience-details/Header';
import DetailsSection from '@/organisms/experience-details/DetailsSection';
import { goToTop } from '@/utils/util';

const ExperienceDetailsPage: React.FC = () => {
    useEffect(() => {
        goToTop();
    }, []);

    return (
        <div>
            <Header />
            <DetailsSection />
        </div>
    );
};

export default ExperienceDetailsPage;