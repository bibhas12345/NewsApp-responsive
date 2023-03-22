import React from 'react'
import { AiFillYoutube, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import ScrollToTop from "react-scroll-to-top";


export default function Footer() {
    return (
        <div>
            <div className='w-full flex p-2 lg:p-4 lg:h-[15rem] bg-gray-700 text-white'>
                <div className='flex flex-col w-1/3 ml-2'>

                    <h2 className=' font-semibold text-2xl lg:text-3xl'><span className='text-red-600'>N</span>ews<span className='text-red-500 text-2xl lg:text-3xl'>24</span></h2>
                    <hr className='w-1/2 text-white m-1 lg:mt-4' />
                    <p className='font-thin lg:mt-5'>Follow us on</p>
                    <div className='flex space-x-1 mt-2 lg:mt-6 lg:space-x-2'>
                        <a href='https://www.youtube.com/c/News24youtube'><AiFillYoutube className='h-8 w-8 hover:text-red-500 text-gray-100 rounded-full'/></a>
                        <a href='https://twitter.com/news24tvchannel?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'><AiOutlineTwitter className='h-8 w-8 hover:text-blue-400  rounded-full' /></a>
                        <a href='https://www.linkedin.com/in/bibhas-sahu/'><AiFillLinkedin className='h-8 w-8 hover:text-blue-600 text-gray-100 rounded-full' /></a>
                    </div>
                </div>
                <div className='w-2/3 lg:mt-5 '>
                
                        <p className='font-thin'><span className='bg-white font-bold text-black rounded-sm p-1'><span className='text-red-600'>N</span>ews<span className='text-red-600'>24</span> sites</span>  NEWS HINDI BUSINESS MOVIES CRICKET FOOD TECH EDUCATION HEALTH LIFESTYLE</p>
                        <p className='font-thin scale-100 lg:mt-7 font-mono'>THIS WEBSITE FOLLOWS THE DNPA CODE OF ETHICS © COPYRIGHT NEWS24 CONVERGENCE LIMITED 2023. <br/>ALL RIGHTS RESERVED.</p>
                    </div>
                </div>
                
            <ScrollToTop smooth color='#8f091d' width='40' height='20' top='70' style={{background:'#f0c5cb', boxShadow:'30',}} />
            </div>
        
    )
}
