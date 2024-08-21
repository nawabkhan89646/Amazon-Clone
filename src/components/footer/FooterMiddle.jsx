import React from 'react';
import { logo, InFlag } from '../../assets/index';
import LanguageIcon from '@mui/icons-material/Language';

function FooterMiddle() {
    return (
        <div className='w-full bg-slate-700 py-10 border-b-[1px] border-gray-500'>
            <div className='max-w-2xl mx-auto flex items-center justify-between px-4 gap-4 text-white'>
                <div className='w-1/3 flex items-center justify-center  cursor-pointer px-2 py-1 '>
                    <img className='w-20 mt-2' src={logo} alt="Logo" />
                </div>
                <div className='w-1/3 flex items-center justify-center border gap-4 border-gray-500 hover:border-amazon_yellow cursor-pointer px-2 py-1 duration-300'>
                  <LanguageIcon/>
                    <p className='flex gap-2 items-center'>English</p>

                </div>
                <div className='w-1/3 flex items-center justify-center gap-2 border border-gray-500 hover:border-amazon_yellow cursor-pointer px-2 py-1 duration-300'>
                    <img className='w-8' src={InFlag} alt="India Flag" />
                    <p>INDIA</p>
                </div>
            </div>
        </div>
    )
}

export default FooterMiddle;
