import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { logo } from '../assets/index';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';
import { auth } from '../firebase'; // Ensure firebase is properly configured
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Sign in successfully!");
      navigate('/userprofile'); // Redirect to user profile on successful sign-in

    } catch (error) {
      console.error('Error signing in:', error);
      // alert(error.message);
      toast.error("Invalid User");
    }
  };

  return (
    <div className='w-full'>
      <ToastContainer />
      <div className='w-full p-4'>
        <form onSubmit={handleSignIn} className='w-[350px] flex flex-col items-center mx-auto'>
          <img className='w-32' src={logo} alt="Logo" />
          <div className='w-full p-6 border border-zinc-200 mt-4'>
            <h2 className='font-medium text-3xl mb-4'>Sign in</h2>
            <div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Email or mobile</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full lowercase border border-zinc-400 py-1 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-custom'
                  type="email"
                  required
                />
              </div>
              <div className='flex flex-col gap-2 mt-3'>
                <p className='text-sm font-medium'>Password</p>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='w-full lowercase border border-zinc-400 py-1 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-custom'
                  type="password"
                  required
                />
              </div>
              <button
                type='submit'
                className='w-full border border-zinc-400 bg-[#f3a847] hover:bg-[#e69730] duration-300 px-4 py-2 mt-4 mb-4 text-white font-bold rounded-sm'
              >
                Sign in
              </button>
            </div>
            <p className='text-sm text-black mt-4'>By continuing, you agree to Amazon's <span className='text-blue-600'>Conditions of Use</span> and <span className='text-blue-600'>Privacy Notice</span></p>
            <p className='text-sm text-gray-600 mt-4'><ArrowRightIcon /><span className='text-blue-600 hover:text-red-600 underline'>Need help?</span></p>
          </div>
          <div className='mt-2 mb-2 w-full text-gray-600 flex items-center text-center'>
            <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
            <span className='w-1/3 text-sm'> New to Amazon?</span>
            <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
          </div>
          <Link to="/registration" className='w-full'>
            <button className='w-full border border-zinc-400 bg-gray-200 hover:bg-gray-300 duration-300 px-4 py-2 mt-4 mb-4 text-black font-semibold text-sm rounded-sm'>Create your account</button>
          </Link>
        </form>
      </div>

      <div className='w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col justify-center items-center p-10'>
        <div className='flex gap-6'>
          <p className='text-blue-600 hover:text-red-600 underline text-sm'>Conditions of use</p>
          <p className='text-blue-600 hover:text-red-600 underline text-sm'>Privacy notice</p>
          <p className='text-blue-600 hover:text-red-600 underline text-sm'>Help</p>
        </div>
        <p className='mt-4 mb-4 text-sm text-gray-600'>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
}

export default Signin;
