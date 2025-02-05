import { useState } from "react";
import ContentModal from "@/components/modal/ContentModal";
import SignUpPage from "./SignUpPage";
import LogInPage from "./LogInPage";

const AuthPage = ({ onClose }: { onClose: () => void }) => {
    const [isLogin, setIsLogin] = useState(true); // Track which page to show

    return (
        <ContentModal className="w-96 h-[90vh]" onClose={onClose}>
            {isLogin ? <LogInPage /> : <SignUpPage />}
            <p className="text-sm text-gray-600 text-center mt-3">
                {isLogin ? "New here? " : "Already have an account? "}
                <span
                    className="text-secondary cursor-pointer font-medium"
                    onClick={() => setIsLogin(!isLogin)}
                >
                    {isLogin ? "Create Account" : "Log In"}
                </span>
            </p>
        </ContentModal>
    );
};

export default AuthPage;
