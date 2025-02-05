import React from 'react';
import Header from '@/organisms/dashboard/Header';
import InterestSection from '@/organisms/dashboard/InterestSection';
import ExperiencesSection from '@/organisms/dashboard/ExperiencesSection';
import BookingsSection from '@/organisms/dashboard/BookingsSection';

const DashboardPage: React.FC = () => {
    return (
        <main className='px-4 flex flex-col gap-8'>
            <div className='z-50'>
                <Header />
            </div>
            <div className='-z-0'>
                <InterestSection />
            </div>
            <ExperiencesSection />
            <BookingsSection />
        </main>
    );
};

export default DashboardPage;