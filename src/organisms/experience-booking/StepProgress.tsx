import React from "react";
import { FaCircleCheck } from "react-icons/fa6";


interface StepProgressProps {
    currentStep: number;
    totalSteps: number;
}

const StepProgress: React.FC<StepProgressProps> = ({ currentStep, totalSteps }) => {
    return (
        <div className="flex items-center w-full mb-3 justify-center">
            {Array.from({ length: totalSteps }, (_, index) => (
                <div key={index} className="flex items-center">
                    {/* Step circle */}
                    <div
                        className={`w-8 h-8 flex items-center justify-center rounded-full ${index < currentStep
                            ? "bg-white text-secondary"
                            : "bg-gray-200 text-gray-400"
                            }`}
                    >
                        {index < currentStep ? (
                            <FaCircleCheck className="w-6 h-6" />
                            // <FaCircleCheck className='text-secondary text-2xl' />
                        ) : (
                            <FaCircleCheck className="w-6 h-6" />
                        )}
                    </div>

                    {/* Step Connector */}
                    {index < totalSteps - 1 && (
                        <div className="w-12 h-1 bg-gray-200">
                            <div
                                className={`h-1 transition-all ${index < currentStep - 1 ? "bg-teal-500" : "bg-gray-200"
                                    }`}
                            ></div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default StepProgress;
