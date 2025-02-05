import React from "react";

interface ContentModalProps {
    children: React.ReactNode;
    className?: string;
    onClose?: () => void;
}

const ContentModal: React.FC<ContentModalProps> = ({ children, className = "", onClose }) => {
    return (
        <div
            className="fixed inset-0 flex items-end justify-center bg-black bg-opacity-50"
            onClick={onClose} // Close when clicking outside modal
        >
            <div
                className={`bg-white rounded-t-2xl shadow-lg w-full max-w-lg mx-auto p-6 relative animate-slide-up ${className}`}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                {/* Close Button */}
                {onClose && (
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    >
                        ✕
                    </button>
                )}

                {/* Modal Content */}
                {children}
            </div>
        </div>
    );
};

export default ContentModal;
