import React from 'react'
import LeftDrawer from '../ProfilePage/LeftDrawer'
import Right from './RightBarFaq'
const FaqPage = () => {
    return (
        <div className='min-h-screen bg-[#13161F] flex'>
            <div className='w-[20%]'>
                <LeftDrawer />
            </div>

            <div className=' flex flex-col w-[60%] '>
                <div className='flex items-center w-full h-[10%]'>
                    <b className='text-white text-4xl ml-[39%]'>FAQ Section</b>
                </div>

                <div className='flex items-center border border-gray-300 rounded-lg w-full h-[70%] my-10'>
                    <p className='text-white ml-[39%]'>Questions to be typed here later</p>
                </div>
                <div className='border w-full h-[15%] mb-4'>
                    <input type="text" className='bg-[#13161F] w-[90%] h-[100%] text-white text-xl' />
                    <button className='bg-[#13161F] w-[10%] h-[90%] text-white'>Ask</button>
                </div>
            </div>
                
            <div className='w-[20%]'>
               <Right></Right>
            </div>
        </div>
    )
}

export default FaqPage