import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux'

export default function EditPatient() {
  const id = useSelector((state) => state.patient.id)


  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get(`https://surubasnet4.pythonanywhere.com/patientList/${id}`, {
      headers: {
        'Authorization': `token ${localStorage.getItem("access_token")}`
      }
    })
      .then(res => {
        setList(res.data)
       
      })
  }, [])
  function calculateAge(date) 
{ 
  const nowyear = new Date().getFullYear();
  const year = date-nowyear
  console.log(date);
 
  const age = year
  return age
} 



  return (
    <div>

      {list.map(item =>

        <div className="flex justify-center m-3">
          <div className="rounded-lg shadow-lg bg-white w-full p-3">
            <table className='table-auto px-2'>
              <tbody>
                <tr>
                  <td className='px-4 text-lg'>Name</td>
                  <td><span className='text-2xl'> {item.firstName} {item.lastName}</span></td>
                </tr>
                <tr>
                  <td className='px-4 text-lg'>Sex</td>
                  <td><span className='text-lg'> {item.sex} </span></td>
                </tr>
                <tr>
                <td className='px-4 text-lg'>Age</td>
                  <td><span className='text-lg'> {calculateAge(item.dateOfBirth)} </span></td>
                </tr>
              </tbody>
            </table>
          
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

      )}

    </div>
  )
}
