
import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom'
import { patient } from '../../components/redux/patientSlice';


export default function Listing() {

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [list, setList] = useState([]);
  useEffect(() => {

    axios.get('https://surubasnet4.pythonanywhere.com/patientList/', {
      headers: {
        'Authorization': `token ${localStorage.getItem("access_token")}`
      }
    })
      .then((res) => {
        setList(res.data)
      })
      .catch((error) => {
        console.error(error)
      })



  },[])

  function deleteList(data) {

    axios.delete(`https://surubasnet4.pythonanywhere.com/patient/${data}/`, {
      headers: {
        'Authorization': `token ${localStorage.getItem("access_token")}`
      }
    })
      .then(res => {
        alert("Your Form deleted Succesfully");
        navigate("/patientlisting")
      })

  }
  function editList(data) {
    console.log(data);
    navigate("/editpatient")
    dispatch(patient(data))

  }

  return (
    <div className=' '>
      <div className='sticky-top justify-between bg-gray-500 flex'>
        <h1 className="text-xl font-semibold text-white p-3">Patient Listing</h1>
        <form className='p-2'>
          <Link type='button' className='border-2 p-1.5  rounded border-green-600 mx-2 bg-white text-green-900 hover:bg-green-600 hover:text-white font-semibold' to="/newpatient">+ new Patient</Link>
        </form>
      </div>

      <table className="table-auto lg:table-fixed border-collapse mt-4 justify-centre align:centre">
        <thead className=''>
          <tr>
            <th className='border border-slate-300 lg:px-10'>Id</th>
            <th className='border border-slate-300 lg:px-10'>First Name</th>
            <th className='border border-slate-300 lg:px-10'>Last Name</th>
            <th className='border border-slate-300 lg:px-10'>Sex</th>
            <th className='border border-slate-300 lg:px-10'>DOB</th>
            <th className='border border-slate-300 lg:px-10'>Status</th>
            <th className='border border-slate-300 lg:px-10'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item =>
            <tr className='hover:bg-gray-400 hover:text-white'>

              <td className='lg:px-10'>{item.id}</td>
              <td className='lg:px-10'>{item.firstName}</td>
              <td className='lg:px-10'>{item.lastName}</td>
              <td className='lg:px-10'>{item.sex}</td>
              <td className='lg:px-10'>{item.dateOfBirth}</td>
              <td className='lg:px-10'>{item.patientStatus}</td>
              <td className='lg:px-10'>
                <button type='button' className=' p-1.5 mx-3  hover:text-yellow-700 text-yellow-500 ' ><i className="fa-solid fa-pencil" onClick={(e) => { e.preventDefault(); editList(item.id) }}></i></button>
                <button type='button' className=' p-1.5 mx-3  hover:text-green-700 text-green-500 ' ><i className="fa-solid fa-check" onClick={(e) => { e.preventDefault(); deleteList(item.id) }}></i></button>
                <button type="button" className=' p-1.5 mx-3 hover:text-red-700 text-red-500 '><i className="fa-solid fa-trash" onClick={(e) => { e.preventDefault(); deleteList(item.id) }}></i></button>
              </td>
            </tr>)}
        </tbody>
      </table>


      <ul>
        <li></li>

      </ul>



    </div>
  )
}
