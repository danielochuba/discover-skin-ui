import ContentModal from '@/components/modal/ContentModal';
import BookDateSection from '@/organisms/experience-booking/BookDateSection';
import StepProgress from '@/organisms/experience-booking/StepProgress';
import { goToTop } from '@/utils/util';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ExperienceBookingPage: React.FC = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();
    useEffect(() => {
        goToTop();
    }, []);
    return (
        <div className="">
            <ContentModal className="!px-2 relative !overflow-y-auto" containerClassName='h-full b' onClose={() => { navigate(-1) }}>
                <StepProgress currentStep={step} totalSteps={4} />
                <div className='overflow-y-auto h-[75vh] scrollbar-hidden'>
                    <BookDateSection />
                </div>
                <button
                    onClick={() => setStep((prev) => Math.max(prev - 1, 1))}
                    className="px-4 py-2 bg-gray-400 text-white rounded"
                >
                    Previous
                </button>
                <button
                    onClick={() => setStep((prev) => Math.min(prev + 1, 4))}
                    className="px-4 py-2 bg-teal-500 text-white rounded"
                >
                    Next
                </button>
            </ContentModal>
        </div>


    );
};

export default ExperienceBookingPage;