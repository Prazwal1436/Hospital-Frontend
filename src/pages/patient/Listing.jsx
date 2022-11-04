import React from 'react'
import { Link } from 'react-router-dom'

export default function Listing() {
  return (
    <div className=''>
    <div className='sticky-top justify-between bg-gray-500 flex'>
    <h1 className="text-xl font-semibold text-white p-3">Patient Listing</h1>
    <form className='p-2'>
    <Link type='button' className='border-2 p-1.5  rounded border-green-600 mx-2 bg-white text-green-900 hover:bg-green-600 hover:text-white font-semibold' to="/newpatient">+ new Patient</Link>
    </form>
    
    </div>
</div>
  )
}
