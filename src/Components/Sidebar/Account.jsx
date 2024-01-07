import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'

const Account = ({ name, email, avatarUrl }) => {
    const bg = 'bg-gradient-to-r from-purple-600 to-indigo-600';
    return (
        <div className={`${bg} text-secondary w-10/12 cursor-pointer transition-all duration-300 active:scale-95 p-3 pr-6 mx-3 rounded-xl flex shrink-0 items-center`}>
            <img src={avatarUrl} alt="image" className='rounded-full w-12 h-12' />
            <div className="flex flex-col px-2 leading-none grow">
                <p className='capitalize font-medium'>{name}</p>
                <p className='text-sm'>{email}</p>
            </div>
            <RiArrowRightSLine className='text-xl' />
        </div>
    )
}

export default Account
