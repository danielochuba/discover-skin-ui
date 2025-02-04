import React from 'react';
import { ButtonProps } from '@/types/button';

const Button: React.FC<ButtonProps> = ({
    buttonClassName,
    containerClassName,
    icon,
    children,
}) => {
    return (
        <span className={containerClassName}>
            {icon}
            <button className={buttonClassName}>
                {children || 'Button'}
            </button>
        </span>
    );
};

export default Button;
