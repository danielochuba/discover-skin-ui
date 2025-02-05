
import React from "react";
import { FaBookmark } from "react-icons/fa";

interface BookmarkProps {
    onClick: () => void;
    className?: string;
    iconClassName?: string;
}

const BookmarkIcon: React.FC<BookmarkProps> = ({ onClick, className, iconClassName }) => {
    return (
        <div onClick={onClick} className={className}>
            <FaBookmark className={iconClassName} />
        </div>
    );
};

export default BookmarkIcon;