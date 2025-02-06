import React from 'react';
import jefferey from '@/assets/images/jefferey.png';
import { FaCircleCheck } from "react-icons/fa6";
import Button from '@/atom/Button';

const ChefProfileCard = () => {
    return (
        <div className=' justify-center items-center h-[85vh] shadow-xl mx-2'>
            <div className="max-w-sm  bg-yellow-400 rounded-xl shadow-lg overflow-hidden border border-gray-200 relative h-[100%] ">
                {/* Header with Background */}

                <div className=" bg-white p-5 rounded-t-[250px] h-[85%] absolute bottom-0 w-[500px] -inset-x-20 mx-auto justify-items-center">
                    <div className="absolute left-1/2 -translate-x-1/2 -inset-y-8 h-fit">
                        <img
                            src={jefferey}
                            alt="Chef Jefferey"
                            className="w-24 h-24 rounded-full "
                        />
                        <div className="absolute top-12 right-0 rounded-full p-3">
                            <FaCircleCheck className='text-secondary text-2xl' />
                        </div>
                    </div>


                    {/* Content */}
                    <div className="p-5  mt-6 rounded-t-full w-[50vh] flex flex-col gap-2">
                        <div className=" gap-1 text-center">
                            <h3 className="text-lg font-semibold">Chef Jefferey Ratatouille</h3>
                            <p className="text-sm text-gray-500">Vendor on Experience SKN since 2024</p>
                        </div>
                        <p className="text-gray-600 text-sm mt-2 text-left">
                            Chef Jefferey Ratatouille is a celebrated local chef with over 15 years of experience blending Caribbean traditions and culinary creativity...
                        </p>
                        <a href="#" className="text-secondary text-left underline font-semibold text-sm mt-2 inline-block">Read more</a>
                    </div>

                    {/* Co-hosts Section */}
                    <div className="px-5 pb-4 flex flex-col  w-[50vh]">
                        <h4 className="text-sm font-semibold text-gray-700">Chef Jeffery’s Co-Hosts</h4>
                        <div className="flex mt-2 ">
                            <img src={jefferey} alt="Co-host 1" className="w-16 h-16 rounded-full" />
                            <img src={jefferey} alt="Co-host 2" className="w-16 h-16 rounded-full" />
                            <img src={jefferey} alt="Co-host 3" className="w-16 h-16 rounded-full" />
                        </div>
                    </div>

                    {/* Contact Button */}

                    <Button
                        label="Contact Hosts"
                        handleClick={() => console.log('See all dates clicked')}
                        buttonClassName='font-semibold text-secondary bg-transparent'
                        containerClassName=' text-center rounded-full bg-secondary bg-opacity-10 py-3 mx-5 w-[90vw] block'
                    />

                </div>

            </div>

        </div>
    );
};

export default ChefProfileCard;
