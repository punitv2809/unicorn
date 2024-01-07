import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header';
import SsoCards from './Components/SsoCards';
import { HiPlus } from 'react-icons/hi2';
import Login from './Components/Login/Login';

const App = () => {
  return (
    <div className='grid grid-cols-12 font-sans bg-primary'>
      <Login />
      <Sidebar />
      {/* <div className="col-span-10 relative px-12 py-6 grid grid-cols-12 gap-4 space-y-4 grid-rows-12 bg-primary bg-no-repeat">
        <Header />
        <SsoCards />
        <SsoCards />
      </div> */}
    </div>
  )
}

export default App
