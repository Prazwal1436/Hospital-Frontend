import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { setOpen } from './redux/navSlice';

export default function Header() {
  const open = useSelector((state) => state.nav.open)
  const dispatch = useDispatch()


  return (
    <div className='sticky-top bg-dark-purple flex'>
         <i className={`text-none fa-sharp fa-solid fa-bars fa-xl mb-3 p-4 lg:hidden cursor-pointer 
             ${!open && "rotate-180 text-white border-dark-purple border-2 rounded-full "} `}
             onClick={ () =>dispatch(setOpen())}></i>
        <Link to="/"><h1 className="text-2xl font-semibold text-white m-2 p-2">Hospital</h1></Link>
    </div>
  )
}
