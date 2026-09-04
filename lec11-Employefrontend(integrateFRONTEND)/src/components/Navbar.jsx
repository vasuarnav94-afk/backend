
import React from 'react'

const Navbar = ({settoggle, toggle}) => {
  return (
    <div className=' flex h-10% p-3.75 items-center justify-around shadow-xl border border-gray-300 rounded-3xl'>
        <h1 className='font-bold text-2xl'>Logo</h1>
        <div className='flex gap-60 items-center text-2xl font-semibold'>
            <p className=' underline'>Home</p>
             <p className=' underline'>About</p>
              <p className=' underline'>Contact</p>
        </div>
        <button  onClick={()=>{
            settoggle((prev)=> !prev)
        }} className='px-6 py-3 text-white bg-blue-400 rounded-4xl shadow-2xl border border-gray-900'  
        >
            {toggle ? "Employee Details" : "Add Employee"}
        </button>
    </div>
  )
}

export default Navbar
