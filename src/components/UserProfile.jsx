import React from 'react';
import { auth } from '../firebase'; // Ensure firebase is properly configured
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import { logo } from '../assets/index';
import { Link } from 'react-router-dom';
import Footer from './footer/Footer';

function UserProfile() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/signin'); // Redirect to sign-in page after logout
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    // Get the current user
    const user = auth.currentUser;

    return (
        <>
        <div className=' bg-gray-100 p-10 flex items-center justify-center'>
            <div className='bg-white p-8 rounded-lg shadow-md max-w-sm mx-auto w-full'>
                <div className='flex justify-center mb-6'>
                    <img className='w-44 ml-10' src={logo} alt="Logo" />
                </div>
                {user ? (
                    <div className='mb-6'>
                        <div className='flex items-center justify-center mb-4'>
                            <PersonIcon className='mr-2' style={{ fontSize: '2rem ', color: "#f3a847" }} />
                            <span className='text-xl font-medium'>{user.displayName || 'User'}</span>
                        </div>
                        <div className='text-center'>
                            <p className='text-lg mb-2'><strong>Email:</strong> {user.email}</p>
                        </div>
                        <Link to="/">
                            <button className='w-full bg-[#f3a847] hover:bg-[#e69730] text-white font-semibold py-2 px-4 rounded mt-4 shadow-custom'>
                                Continue Shopping
                            </button>
                        </Link>
                        <button
                            onClick={handleLogout}
                            className='w-full bg-[#f3a847] hover:bg-[#e69730] text-white font-semibold py-2 px-4 rounded mt-4 shadow-custom'
                        >
                            Sign out
                        </button>
                    </div>
                ) : (
                    <div className='text-center'>
                        <PersonIcon  style={{ fontSize: '2rem ', color: "#f3a847" }} />
                        <p className='text-red-500 font-semibold mt-2 mb-2'>No user is signed in.</p>
                        <Link to="/signin">
                            <button className='w-full bg-[#f3a847] hover:bg-[#e69730] text-white font-semibold py-2 px-4 rounded mt-4 shadow-custom'>
                                Sign In
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
        <Footer/>
        </>
        
    );
}

export default UserProfile;
