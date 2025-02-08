import React, { useEffect } from 'react';
import Header from '@/organisms/experience-details/Header';
import DetailsSection from '@/organisms/experience-details/DetailsSection';
import { goToTop } from '@/utils/util';
import SimilarExperiencesSection from '@/organisms/experience-details/SimilarExperiencesSection';
import FooterSection from '@/organisms/experience-details/FooterSection';
const ExperienceDetailsPage: React.FC = () => {
    useEffect(() => {
        goToTop();
    }, []);

    return (
        <div>
            <Header />
            <DetailsSection />
            <SimilarExperiencesSection />
            <FooterSection />
        </div>
    );
};

export default ExperienceDetailsPage;