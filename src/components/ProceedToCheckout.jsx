import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from "../assets/index";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Footer from './footer/Footer';

function ProceedToCheckout() {
    const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);

    const handlePayment = (e) => {
        e.preventDefault()
        setShowPaymentSuccess(true);
        
    };

    return (
        <>
            <div className="flex items-center justify-center p-6 bg-gray-100">
                <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
                    <Link to="/">
                        <img className="w-32 cursor-pointer mb-4 mx-auto" src={logo} alt="Logo" />
                    </Link>
                    <h2 className="text-2xl font-bold mb-4 text-center">Proceed to Checkout</h2>
                    <form className="space-y-4" onSubmit={handlePayment}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                            <input type="text" id="name" className="w-full lowercase border border-zinc-400 py-1 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-custom" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                            <input type="email" id="email" className="w-full lowercase border border-zinc-400 py-1 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-custom" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="address">Address</label>
                            <input type="text" id="address" className="w-full lowercase border border-zinc-400 py-1 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-custom" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="paymentDetails">Payment Details</label>
                            <input type="text" id="paymentDetails" className="w-full lowercase border border-zinc-400 py-1 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-custom" required />
                        </div>
                        <button type="submit" className="w-full py-2 px-4 text-white font-semibold rounded-md bg-[#f3a847] hover:bg-[#e69730] duration-300">
                            <CreditCardIcon /> Payment <DoubleArrowIcon />
                        </button>
                    </form>
                </div>
            </div>
            {showPaymentSuccess && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h2 className="text-2xl font-bold mb-4">Payment Successful!✅</h2>
                        <p className="text-lg text-gray-700">Thank you for your purchase :)</p>
                        <button className="mt-4 py-2 px-4 bg-[#f3a847] hover:bg-[#e69730] text-white font-semibold rounded-md duration-300" onClick={() => setShowPaymentSuccess(false)}>Close</button>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
}

export default ProceedToCheckout;

