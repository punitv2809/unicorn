import React from 'react'
import { HiUser, HiUsers } from 'react-icons/hi2'

const Login = () => {
    return (
        <div className='relative col-span-12 relative bg-primary text-primary flex items-center justify-center h-screen'>
            <img src="bg-2.svg" alt="" className='absolute select-none'/>
            <div className="form w-3/12 bg-glass py-12 px-6 rounded-lg">
                <div className="logo text-5xl py-12 flex flex-col items-center justify-center font-black tracking-wide">
                    <p className='inline-flex'>UNIC
                    <div className="w-12 h-12 bg-gradient-to-r mx-1 rounded-full from-purple-600 to-indigo-600 flex items-center justify-center">
                        <div className="w-6 h-6 bg-glass rounded-full"></div></div>N</p>
                    <p className='text-xs font-thin'>where connection happens</p>
                </div>
                <div className="fields space-y-4">
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <HiUsers className='text-xl mr-1' />
                            <p className='text-lg'>Login</p>
                        </div>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore?</p>
                    </div>
                    <div className="space-y-4 py-4">
                        <div className="input">
                            <input type="text" className='w-full outline-none p-3 rounded-lg bg-secondary placeholder:text-secondary/50' placeholder='Email or Username' />
                        </div>
                        <div className="input">
                            <input type="password" className='w-full outline-none p-3 rounded-lg bg-glass placeholder:text-secondary/50' placeholder='Password' />
                        </div>
                    </div>
                    <button className='w-full p-3 rounded-lg shadow-xl bg-accent active:scale-95 transition-all font-semibold'>Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default Login
