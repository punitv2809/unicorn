import React from 'react'
import { RiCloseLine, RiSettings6Fill } from 'react-icons/ri'

const Logo = () => {
    return (
        <div className='p-3 pt-12 w-10/12 text-xl flex items-center text-accent font-black tracking-wider'>
            <div className='text-4xl'>
                <RiSettings6Fill />
            </div>
            <p className='px-2 grow text-primary'>UNICON</p>
        </div>
    )
}

export default Logo
