import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import SectionHeading from '@/components/SectionHeading';
import ExperiencesList from '@/molecules/dashboard/ExperienceList';

const ExperiencesSection: React.FC = () => {
    return (
        <section className='flex flex-col gap-4'>
            <SectionHeading
                title="Experiences You'll Love"
                subtitle="Personalized Recommendations"
                sideContent={<FaArrowRight size={30} className='  bg-gray-200 rounded-full p-2' />}
            />
            {/* Experiences */}
            <ExperiencesList />
        </section>
    );
};

export default ExperiencesSection;