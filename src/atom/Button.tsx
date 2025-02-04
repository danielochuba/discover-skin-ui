import React from 'react';
import { ButtonProps } from '@/types/button';

const Button: React.FC<ButtonProps> = ({
    buttonClassName,
    containerClassName,
    icon,
    label,
    handleClick,
}) => {
    return (
        <span className={containerClassName}>
            {icon ?? icon}
            <button className={buttonClassName} type="button" onClick={handleClick}>
                {label ?? label}
            </button>
        </span>
    );
};

export default Button;
