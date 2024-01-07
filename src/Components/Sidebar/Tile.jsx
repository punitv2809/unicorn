import React from 'react'

const Tile = ({ name, icon, active = false }) => {
    return (
        <div className={`flex w-10/12 transition-all duration-300 items-center
         justify-start cursor-pointer p-3 rounded-lg hover:bg-ternary hover:text-accent ${active ? 'bg-ternary text-accent' : ''}`}>
            <div className={`text-xl`}>
                {icon}
            </div>
            <p className='px-2'>{name}</p>
        </div>
    )
}

export default Tile
