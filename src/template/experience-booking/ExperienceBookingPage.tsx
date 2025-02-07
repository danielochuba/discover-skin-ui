import ContentModal from '@/components/modal/ContentModal';
import BookDateSection from '@/organisms/experience-booking/BookDateSection';
import ConfirmBooking from '@/organisms/experience-booking/ConfirmBooking';
import SelectPeopleSection from '@/organisms/experience-booking/SelectPeopleSection';
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
            <ContentModal className="!px-2 relative !overflow-y-auto" containerClassName='h-full ' onClose={() => { navigate(-1) }}>
                <StepProgress currentStep={step} totalSteps={4} />


                {/* Step 1 */}
                {step === 1 && (
                    <div className='overflow-y-auto h-[80vh] scrollbar-hidden'>
                        <BookDateSection />
                    </div>
                )}


                {/* Step 2 */}
                {step === 2 && (
                    <div className=' h-[75vh] w-full flex flex-col'>
                        <SelectPeopleSection />
                        <button
                            onClick={() => setStep((prev) => Math.min(prev + 1, 4))}
                            type="submit"
                            className="mt-4 w-[90%] bg-secondary mx-auto text-white font-semibold py-2 rounded-full hover:bg-green-600 transition disabled:bg-gray-400"

                        >
                            Continue
                        </button>
                    </div>
                )}


                {/* Step 3 */}
                {step === 3 && (
                    <div className=' h-[75vh] w-full'>
                        <ConfirmBooking />
                    </div>
                )}


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