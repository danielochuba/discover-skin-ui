import ContentModal from '@/components/modal/ContentModal';
import BookDateSection from '@/organisms/experience-booking/BookDateSection';
import ConfirmBooking from '@/organisms/experience-booking/ConfirmBooking';
import PaymentSection from '@/organisms/experience-booking/PaymentSection';
import SelectPeopleSection from '@/organisms/experience-booking/SelectPeopleSection';
import StepProgress from '@/organisms/experience-booking/StepProgress';

import { goToTop } from '@/utils/util';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const ExperienceBookingPage: React.FC = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();
    useEffect(() => {
        goToTop();
    }, []);
    return (
        <div className="">
            <ContentModal className="!px-2 relative !overflow-y-auto" containerClassName='h-full ' onClose={step === 1 ? () => { navigate(-1) } : undefined}>

                {step > 1 && <FaArrowLeft size={30} onClick={() => setStep((prev) => Math.max(prev - 1, 1))} className='  bg-gray-200 rounded-full p-2 ml-2 mb-3' />}
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
                    <div className=' h-[75vh] w-full overflow-y-auto scrollbar-hidden'>
                        <ConfirmBooking />
                        {/* Continue Button */}
                        <button
                            onClick={() => setStep((prev) => Math.min(prev + 1, 4))}
                            className="w-full bg-teal-700 text-white py-2 mt-4 rounded-full font-semibold hover:bg-teal-800">
                            Continue to make payment
                        </button>
                    </div>
                )}

                {/* Step 4 */}
                {step === 4 && (
                    <div className=' h-[75vh] w-full'>
                        <PaymentSection />

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