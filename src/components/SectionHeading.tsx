import React from 'react';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    sideContent?: React.ReactNode;
    titleClassName?: string;   // Custom class for title styling
    subtitleClassName?: string; // Custom class for subtitle styling
    sideContentClassName?: string; // Custom class for side content styling
    containerClassName?: string;  // Custom class for the container
    titleAlignment?: 'left' | 'center' | 'right'; // Align the title
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
    title,
    subtitle,
    sideContent,
    titleClassName = '',
    subtitleClassName = '',
    sideContentClassName = '',
    containerClassName = '',
    titleAlignment = 'between',
}) => {
    return (
        <div className={`flex items-center justify-${titleAlignment} space-x-4 ${containerClassName}`}>
            <div className={`space-y-1 ${titleAlignment === 'center' ? 'text-center' : ''}`}>
                <h2 className={`text-[16px] font-bold ${titleClassName}`}>{title}</h2>
                {subtitle && <p className={`text-gray-600 text-sm ${subtitleClassName}`}>{subtitle}</p>}
            </div>
            {sideContent && <div className={`ml-auto ${sideContentClassName}`}>{sideContent}</div>}
        </div>
    );
};

export default SectionHeading;
