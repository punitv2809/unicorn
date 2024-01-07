import React from 'react'

const Button = ({ icon, callback = None }) => {
    return (
        <button onClick={callback} className='bg-secondary p-3 rounded-lg'>
            {icon}
        </button>
    )
}

export default Button
