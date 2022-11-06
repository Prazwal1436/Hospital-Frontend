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
   
    <div className="flex justify-center m-3">
  <div className="rounded-lg shadow-lg bg-white w-full p-3">
    Your Details Here
    <div className="p-6">
    <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab"
  role="tablist">
  <li className="nav-item" role="presentation">
    <a href="#tabs-home" className="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
      aria-selected="true">Home</a>
  </li>
  <li className="nav-item" role="presentation">
    <a href="#tabs-profile" className="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
      aria-controls="tabs-profile" aria-selected="false">Profile</a>
  </li>
  <li className="nav-item" role="presentation">
    <a href="#tabs-messages" className="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab"
      aria-controls="tabs-messages" aria-selected="false">Messages</a>
  </li>
  <li className="nav-item" role="presentation">
    <a href="#tabs-contact" className="
      nav-link
      disabled
      pointer-events-none
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-contact-tab" data-bs-toggle="pill" data-bs-target="#tabs-contact" role="tab"
      aria-controls="tabs-contact" aria-selected="false">Contact</a>
  </li>
</ul>
<div className="tab-content" id="tabs-tabContent">
  <div className="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
    Tab 1 content
  </div>
  <div className="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
    Tab 2 content
  </div>
  <div className="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
    Tab 3 content
  </div>
  <div className="tab-pane fade" id="tabs-contact" role="tabpanel" aria-labelledby="tabs-contact-tab">
    Tab 4 content
  </div>
</div>
    </div>
  </div>
</div>

   
</div>
  )
}
