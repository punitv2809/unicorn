import React from 'react'
import { HiArchiveBox, HiCamera, HiPlus } from 'react-icons/hi2'

const Header = () => {
    return (
        <div className='col-span-12 row-span-1 flex items-center justify-between'>
            <div className="text-primary p-3 space-y-2">
                <p className='text-4xl font-bold'>Manage Sso clients</p>
                <p className='text-primary/50 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quos?</p>
            </div>
            <div className="text-primary space-x-4 text-2xl">
                <button className='bg-secondary p-3 rounded-lg'>
                    <HiPlus />
                </button>
                <button className='bg-secondary p-3 rounded-lg'>
                    <HiCamera />
                </button>
            </div>
        </div>
    )
}

export default Header
