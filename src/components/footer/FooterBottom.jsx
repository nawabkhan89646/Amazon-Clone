import React from 'react';

function FooterBottom() {
    return (
        <div className='bg-amazon_light_blue py-10 border-t-[1px] border-gray-500'>
            <div className='max-w-5xl mx-auto px-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-300'>
                    {/* Column 1 */}
                    <div className='mb-6'>
                        <p className='font-bold mb-1'>AbeBooks</p>
                        <ul>
                            <li className='text-sm text-gray-400'>Books, Art</li>
                            <li className='text-sm text-gray-400'>& Collections</li>
                        </ul>
                    </div>
                    <div className='mb-6'>
                        <p className='font-bold mb-1 '>Shopbop</p>
                        <ul>
                            <li className='text-sm text-gray-400'>Designer</li>
                            <li className='text-sm text-gray-400'>Fashion Brands</li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className='mb-6'>
                        <p className='font-bold mb-1 '>Amazon Web Services</p>
                        <ul>
                            <li className='text-sm text-gray-400'>Scalable Cloud</li>
                            <li className='text-sm text-gray-400'>Computing services</li>
                        </ul>
                    </div>
                    <div className='mb-6'>
                        <p className='font-bold mb-1 '>Amazon Business</p>
                        <ul>
                            <li className='text-sm text-gray-400'>Everything For</li>
                            <li className='text-sm text-gray-400'>Your Business</li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className='mb-6'>
                        <p className='font-bold mb-3'>Audible</p>
                        <ul>
                            <li className='text-sm text-gray-400'>Download</li>
                            <li className='text-sm text-gray-400'>Audio Books</li>
                        </ul>
                    </div>
                    <div className='mb-6'>
                        <p className='font-bold mb-1 '>Prime Now</p>
                        <ul>
                            <li className='text-sm text-gray-400'>2-Hour Delivery</li>
                            <li className='text-sm text-gray-400'>on Everyday Items</li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className='mb-6'>
                        <p className='font-bold mb-1 '>IMDb</p>
                        <ul>
                            <li className='text-sm text-gray-400'>Movie, TV</li>
                            <li className='text-sm text-gray-400'>& Celebrities</li>
                        </ul>
                    </div>
                    <div className='mb-6'>
                        <p className='font-bold mb-3'>Amazon Prime Music</p>
                        <ul>
                            <li className='text-sm text-gray-400'>100 Million songs, ad-free</li>
                            <li className='text-sm text-gray-400'>Over 15 million podcast episodes</li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center gap-4 mt-10 mb-[2px] text-[#DDD] text-[11px] font-semibold">
                    <h3>Condition of Use & Sale</h3>
                    <h3>Privacy Notice</h3>
                    <h3>Interest-Based Ads</h3>
                </div>
                <div className="text-center">
                    <h3 className="font-semibold text-[11px] text-[#DDD] mb-[2px]">
                        © 1996-2023, Amazon.com, Inc. or its affiliates
                    </h3>
                    <h3 className="font-semibold text-[11px] text-[#DDD] mb-[2px]">
                        all rightd reserved by: <a className='hover:underline' href="https://github.com/Abhinandan411">Abhinandan</a>
                    </h3>
                </div>

            </div>
        </div>
    );
}

export default FooterBottom;
