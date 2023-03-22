import React from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.css'
import {HiOutlineMenu} from 'react-icons/hi'
import {RxCrossCircled} from 'react-icons/rx'
export default function Navbar() {
    const [show,setShow]=React.useState(false);
    const handleShow=()=>{
        setShow(!show);
    }
    return (
        <div className='mb-5'>


            <nav className="p-4 border-gray-200 bg-gray-800 text-gray-100  dark:bg-gray-800 dark:border-gray-700 w-full fixed z-10 mb-12">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="#" className="flex items-center">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 md:h-10" alt="Flowbite Logo" /> */}
                        <h2 className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"><span className='text-red-600 text-3xl'>N</span>ews<span className='text-2xl text-red-600'>24</span></h2>
                    </a>
                    <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false" onClick={()=>handleShow()}>
                        {!show && <HiOutlineMenu className='text-rose-400' size='1.3rem' />}
                        {show && <RxCrossCircled className='text-rose-400 ' size='1.3rem'/>}
                    </button>
                    <div className="hidden w-full sm:block sm:w-auto" id="navbar-solid-bg">
                        <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 sm:flex-row sm:space-x-8 sm:mt-0 sm:text-sm sm:font-medium sm:border-0 sm:bg-transparent dark:bg-gray-800 sm:dark:bg-transparent dark:border-gray-700">
                            <li>
                                <NavLink to="/" activeClassName='bg-blue-400' className="block py-2 pl-3 pr-4 text-gray-200  hover:text-red-500" aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/general" activeClassName='text-black' className="block py-2 pl-3 pr-4 text-gray-200 rounded  hover:text-red-500">General</NavLink>
                            </li>
                            <li>
                                <NavLink to="/business" activeClassName='active' className="block py-2 pl-3 pr-4 text-gray-200 rounded  hover:text-red-500">Business</NavLink>
                            </li>
                            <li>
                                <NavLink to="/entertainment" activeClassName='active' className="block py-2 pl-3 pr-4  text-gray-200 rounded  hover:text-red-500">Entertainment</NavLink>
                            </li>
                            <li>
                                <NavLink to="/health" activeClassName='active' className="block py-2 pl-3 pr-4  text-gray-200 rounded  hover:text-red-500">Health</NavLink>
                            </li>
                            <li>
                                <NavLink to="/science" activeClassName='active' className="block py-2 pl-3 pr-4  text-gray-200 rounded  hover:text-red-500">Science</NavLink>
                            </li>
                            <li>
                                <NavLink to="/sports" activeClassName='active' className="block py-2 pl-3 pr-4  text-gray-200 rounded  hover:text-red-500">Sports</NavLink>
                            </li>
                            <li>
                                <NavLink to="/technology" activeClassName='active' className="block py-2 pl-3 pr-4  text-gray-200 rounded  hover:text-red-500">Technology</NavLink>
                            </li>
                            
                        </ul>
                    </div>
                    {
                        show && <div className='sm:hidden overflow-y-auto w-screen h-full top-0 left-0'>
                            
                        <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 sm:flex-row sm:space-x-8 sm:mt-0 sm:text-sm sm:font-medium sm:border-0 sm:bg-transparent dark:bg-gray-800 sm:dark:bg-transparent dark:border-gray-700">
                                <li  onClick={handleShow}>
                                    <NavLink to="/" className="block py-2 pl-3 pr-4  text-black  rounded  hover:bg-red-400" aria-current="page">Home</NavLink>
                                </li>
                                <li  onClick={handleShow}>
                                    <NavLink to="/general"  className="block py-2 pl-3 pr-4 text-black rounded hover:bg-red-400">General</NavLink>
                                </li>
                                <li  onClick={handleShow}>
                                    <NavLink to="/business" className="block py-2 pl-3 pr-4 text-black rounded hover:bg-red-400">Business</NavLink>
                                </li>
                                <li  onClick={handleShow}>
                                    <NavLink to="/entertainment" className="block py-2 pl-3 pr-4  text-black rounded hover:bg-red-400">Entertainment</NavLink>
                                </li>
                                <li  onClick={handleShow}>
                                    <NavLink to="/health" className="block py-2 pl-3 pr-4  text-black rounded hover:bg-red-400">Health</NavLink>
                                </li>
                                <li  onClick={handleShow}>
                                    <NavLink to="/science" className="block py-2 pl-3 pr-4  text-black rounded hover:bg-red-400">Science</NavLink>
                                </li>
                                <li  onClick={handleShow}>
                                    <NavLink to="/sports" className="block py-2 pl-3 pr-4  text-black rounded hover:bg-red-400">Sports</NavLink>
                                </li>
                                <li  onClick={handleShow}>
                                    <NavLink to="/technology" className="block py-2 pl-3 pr-4  text-black rounded  hover:bg-red-400">Technology</NavLink>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </nav>


        </div>
    )
}
