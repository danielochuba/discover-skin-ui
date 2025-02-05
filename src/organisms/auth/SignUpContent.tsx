import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation Schema
const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
});

const SignupForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    };

    const handleSubmit = (values: typeof initialValues) => {
        console.log("Form Data:", values);
    };

    return (
        <>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ isSubmitting }) => (
                    <Form className="mt-4 space-y-4">
                        {/* First Name */}
                        <div className="relative w-full">
                            <Field
                                type="text"
                                name="firstName"
                                id="firstName"
                                className="w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 focus:ring-2 outline-none peer"
                            />
                            <label
                                htmlFor="firstName"
                                className="absolute left-3 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:font-medium"
                            >
                                First name*
                            </label>
                            <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Last Name */}
                        <div className="relative w-full">
                            <Field
                                type="text"
                                name="lastName"
                                id="lastName"
                                className="w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 focus:ring-2 outline-none peer"
                            />
                            <label
                                htmlFor="lastName"
                                className="absolute left-3 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:font-medium"
                            >
                                Last name*
                            </label>
                            <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Email Address */}
                        <div className="relative w-full">
                            <Field
                                type="email"
                                name="email"
                                id="email"
                                className="w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 focus:ring-2 outline-none peer"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-3 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:font-medium"
                            >
                                Email address*
                            </label>
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Password */}
                        <div className="relative w-full">
                            <Field
                                type={passwordVisible ? "text" : "password"}
                                name="password"
                                id="password"
                                className="w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 pr-10 text-gray-900 focus:ring-2 outline-none peer"
                            />
                            <label
                                htmlFor="password"
                                className="absolute left-3 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:font-medium"
                            >
                                Password (8+ characters)*
                            </label>
                            <button
                                type="button"
                                onClick={() => setPasswordVisible(!passwordVisible)}
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-sm text-gray-600"
                            >
                                {passwordVisible ? "Hide" : "Show"}
                            </button>
                            <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Forgot Password */}
                        <p className="text-sm text-secondary cursor-pointer mt-2">Forgot Password?</p>

                        {/* Terms and Conditions */}
                        <p className="text-xs text-gray-600 mt-2">
                            By signing up you agree to our <span className="font-semibold">Terms and Conditions</span> and
                            acknowledge the <span className="font-semibold">Privacy Policy</span>
                        </p>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="mt-4 w-full bg-secondary text-white font-semibold py-2 rounded-full transition disabled:bg-gray-400"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "Get Started"}
                        </button>
                    </Form>
                )}
            </Formik>

        </>
    );
};

export default SignupForm;
