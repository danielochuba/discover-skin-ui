import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { LogInValidationSchema } from "@/validations/LogInForm";

const LogInForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const initialValues = {
        email: "",
        password: "",
    };

    const handleSubmit = (values: typeof initialValues) => {
        console.log("Form Data:", values);
    };

    return (
        <>
            <Formik initialValues={initialValues} validationSchema={LogInValidationSchema} onSubmit={handleSubmit}>
                {({ isSubmitting }) => (
                    <Form className="mt-4 space-y-4">
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
                                className="absolute left-3 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs"
                            >
                                Email Address*
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
                                className="absolute left-3 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs "
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

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="mt-4 w-full bg-secondary text-white font-semibold py-2 rounded-full hover:bg-green-600 transition disabled:bg-gray-400"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Logging In..." : "Log In"}
                        </button>
                    </Form>
                )}
            </Formik>


        </>
    );
};

export default LogInForm;
