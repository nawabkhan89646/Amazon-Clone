import React from 'react';

function FooterTop() {
    return (
        <>
            <div className='bg-slate-700'>
                
                 <button className='w-full bg-amazon_light_blue py-2 text-white' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top</button>
                <div className='max-w-5xl mx-auto px-4 py-6 w- flex flex-wrap justify-between text-gray-300'>
                    {/* Column 1 */}
                    <div className='w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0'>
                        <p className='font-bold text-base mb-3 text-white'>Get to Know Us</p>
                        <ul>
                            <li className='footerLink'><a href="">About Us</a></li>
                            <li className='footerLink'><a href="">Careers</a></li>
                            <li className='footerLink'><a href="">Press Release</a></li>
                            <li className='footerLink'><a href="">Amazon Science</a></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className='w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0'>
                        <p className='font-bold text-base mb-3 text-white'>Connect with Us</p>
                        <ul>
                            <li className='footerLink'><a href="">Facebook</a></li>
                            <li className='footerLink'><a href="">Twitter</a></li>
                            <li className='footerLink'><a href="">Instagram</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className='w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0'>
                        <p className='font-bold text-base mb-3 text-white'>Make Money with Us</p>
                        <ul>
                            <li className='footerLink'><a href="">Sell on Amazon</a></li>
                            <li className='footerLink'><a href="">Sell under Amazon Accelerator</a></li>
                            <li className='footerLink'><a href="">Protect and Build Your Brand</a></li>
                            <li className='footerLink'><a href="">Amazon Global Selling</a></li>
                            <li className='footerLink'><a href="">Become an Affiliate</a></li>
                            <li className='footerLink'><a href="">Fulfillment by Amazon</a></li>
                            <li className='footerLink'><a href="">Advertise Your Product</a></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className='w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0'>
                        <p className='font-bold text-base mb-3 text-white'>Let Us Help You</p>
                        <ul>
                            <li className='footerLink'><a href="">COVID-19 and Amazon</a></li>
                            <li className='footerLink'><a href="">Your Account</a></li>
                            <li className='footerLink'><a href="">Returns Center</a></li>
                            <li className='footerLink'><a href="">Recalls and Product Safety Alerts</a></li>
                            <li className='footerLink'><a href="">100% Purchase Protection</a></li>
                            <li className='footerLink'><a href="">Amazon App Download</a></li>
                            <li className='footerLink'><a href="">Help</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
        </>
    );
}

export default FooterTop;
