import React from 'react';
import { FaUser } from 'react-icons/fa'; // Default icon

interface UserImagePlaceholderProps {
    size?: number;
    alt?: string;
    containerClass?: string; // Class for the container
    imageClass?: string; // Class for the image
    style?: React.CSSProperties; // Inline style for the container
    image?: string; // Optional image prop
}

const UserImagePlaceholder: React.FC<UserImagePlaceholderProps> = ({
    size = 50,
    alt = 'User Image',
    containerClass = '',
    imageClass = '',
    image,
}) => {

    return (
        <div
            className={`user-image-placeholder ${containerClass}`} // Add container class
            aria-label={alt}
        >
            {image ? (
                <img
                    src={image}
                    alt={alt}
                    className={imageClass} // Add image class
                />
            ) : (
                <FaUser size={size / 2} />
            )}
        </div>
    );
};

export default UserImagePlaceholder;
