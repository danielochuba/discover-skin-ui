import SectionHeading from '@/components/SectionHeading';
import ExperiencesList from '@/molecules/dashboard/ExperienceList';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';



const SimilarExperiencesSection: React.FC = () => {
    return (
        <section className='flex flex-col gap-4 p-3 scrollbar-hide'>
            <SectionHeading
                title="Similar experiences to this one"
                sideContent={<FaArrowRight size={30} className='  bg-gray-200 rounded-full p-2' />} />
            <ExperiencesList />
        </section>
    );
};

export default SimilarExperiencesSection;