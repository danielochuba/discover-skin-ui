import React from 'react';
import ExperienceCard from '@/components/cards/ExperienceCard';
import experiences from '@/data/Experiences'; // Import the dataset
import { Link } from 'react-router-dom';
import ApplicationRoutes from '@/config/routes';


const ExperiencesList: React.FC = () => {
    return (
        <div className="">
            {/* Horizontal Scrollable Container */}
            <div className="flex overflow-x-auto space-x-2 scrollbar-hide">
                {experiences.map((experience) => (
                    <div key={experience.id} className="flex-shrink-0 ">
                        <Link to={ApplicationRoutes.EXPERIENCES.DETAIL.replace(':id', experience.id.toString())}>
                            <ExperienceCard experience={experience} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperiencesList;