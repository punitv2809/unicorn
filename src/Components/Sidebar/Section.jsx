import React from 'react'

const Section = ({ name = null, children }) => {
    return (
        <div className='flex flex-col px-3 space-y-3 py-12 w-full items-center'>
            {name && <div className='w-10/12'>
                <p className='uppercase text-xs font-semibold text-secondary/50 tracking-widest'>{name}</p></div>}
            {children}
        </div>
    )
}

export default Section
