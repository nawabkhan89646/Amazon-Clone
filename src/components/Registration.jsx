import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { logo } from "../assets/index";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Registration() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userRePassword, setRePassword] = useState("");
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    if (userPassword !== userRePassword) {
      toast.error("Passwords do not match!");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, userEmail, userPassword);
      // alert("Account created successfully!");
      toast.success("Account created successfully!");
      navigate("/signin");  // Navigate to sign-in page after successful registration
    } catch (error) {
      console.error("Error creating account:", error);
      toast.error('User already exists')
      // , {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    }
  };

  return (
    <div className='w-full'>
      <ToastContainer />
      <div className='w-full pb-10'>
        <form onSubmit={handleRegistration} className='w-[350px] flex flex-col items-center mx-auto'>
          <Link to="/">
            <img className='w-32 cursor-pointer' src={logo} alt="Logo" />
          </Link>
          <div className='w-full p-6 border border-zinc-200 mt-4'>
            <h2 className='font-medium text-2xl mb-4'>Create Account</h2>
            <div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Your name</p>
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  className='w-full lowercase border border-zinc-400 py-1 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-custom'
                  type="text"
                />
              </div>
              <div className='flex flex-col gap-2 mt-3'>
                <p className='text-sm font-medium'>Email or mobile</p>
                <input
                  onChange={(e) => setUserEmail(e.target.value)}
                  className='w-full lowercase border border-zinc-400 py-1 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-custom'
                  type="email"
                />
              </div>
              <div className='flex flex-col gap-2 mt-3'>
                <p className='text-sm font-medium'>Password</p>
                <input
                  onChange={(e) => setUserPassword(e.target.value)}
                  placeholder='Password must be at least 6 characters'
                  className='w-full lowercase border border-zinc-400 py-1 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-custom'
                  type="password"
                />
              </div>
              <div className='flex flex-col gap-2 mt-3'>
                <p className='text-sm font-medium'>Re-enter password</p>
                <input
                  onChange={(e) => setRePassword(e.target.value)}
                  placeholder='Password must be at least 6 characters'
                  className='w-full lowercase border border-zinc-400 py-1 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-custom'
                  type="password"
                />
              </div>
              <button
                type='submit'
                className='w-full border border-zinc-400 bg-[#f3a847] hover:bg-[#e69730] duration-300 px-4 py-2 mt-4 mb-4 text-white font-semibold text-sm rounded-sm'
              >
                Create your account
              </button>
              <div>
                <p className='text-sm text-black mt-4'>
                  By continuing, you agree to Amazon's <span className='text-blue-600'>Conditions of Use</span> and <span className='text-blue-600'>Privacy Notice</span>.
                </p>
                <p className='text-sm text-gray-600 mt-4'>
                  <ArrowRightIcon /><span className='text-blue-600 hover:text-red-600 underline'>Need help?</span>
                </p>
              </div>
              <div className='mt-4 mb-2'>
                <Link to="/signin">
                  <p>
                    Already have an Account? <span className='text-blue-600'>Sign in<ArrowRightIcon /></span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className='w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col justify-center items-center p-10'>
        <div className='flex gap-6'>
          <p className='text-blue-600 hover:text-red-600 underline text-sm'>Conditions of Use</p>
          <p className='text-blue-600 hover:text-red-600 underline text-sm'>Privacy Notice</p>
          <p className='text-blue-600 hover:text-red-600 underline text-sm'>Help</p>
        </div>
        <p className='mt-4 mb-4 text-sm text-gray-600'>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
}

export default Registration;
