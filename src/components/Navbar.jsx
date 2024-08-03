import React, { useState } from 'react'
import Avatar from 'react-avatar';

import { AiOutlineBell, AiOutlineMenu } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'
import { IoMdMic } from 'react-icons/io'
import { RiVideoAddLine } from 'react-icons/ri'
import logo from "../../public/logo.png"
import profile from "../../public/profile.jpg"
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [searchQuery,setSearchQuery] = useState("")
    const navigate = useNavigate()

    const searchQueryHandler = (event) => {
        // if((event?.key === "Enter" || event==="searchButton") && searchQuery?.length>0)
    }

  return (
    <div className='flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2'>
        <div className='flex items-center space-x-4'>
            <AiOutlineMenu className='text-xl cursor-pointer' />
            <Link to={`/`}><img src={logo} alt="logo" className='w-28 cursor-pointer' /></Link>
        </div>
        <div className='flex w-[35%] items-center'>
            <div className='w-[100%] border border-gray-400 px-4 py-2 rounded-l-full'>
                <input type="text" placeholder='Search' className='outline-none' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyUp={searchQueryHandler} />
            </div>
            <button className='px-4 py-2 border border-gray-400 bg-gray-100 rounded-r-full'>
                <CiSearch size={"24px"} />
            </button>
            <IoMdMic size={"42px"} className='ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200' />
        </div>
        <div className='flex space-x-5 items-center'>
            <RiVideoAddLine className='text-2xl' />
            <AiOutlineBell className='text-2xl' />
            <Avatar src={profile} size='32' round={true} />
        </div>
    </div>
  )
}

export default Navbar