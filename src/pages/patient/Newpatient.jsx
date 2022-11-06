import React, { useState } from 'react'
import { bloodType,sex } from '../../components/constants/blood'
import {Link} from "react-router-dom"
import axios from 'axios'


export default function Newpatient() {
  const[patient,setPatient]=useState({
    firstName:"",
    middleName:"",
    lastName:"",
    sex:"",
    dateOfBirth:"",
   placeOfBirth:"",
    occupation:"",
    patientStatus:"",
    bloodType:"",
    clinicsite:"",
    refferedby:"",
    reffereddate:"",
    relegion:"",
    guardian:"",
    phone:"",
    email:"",
    address:""
  })

  

  const handleChange=(e)=>{
    setPatient({...patient, [e.target.name]:e.target.value})
}

function handleSubmit(e) {
  e.preventDefault();
  const {  firstName,
  middleName,
  lastName,
  sex,
  dateOfBirth,
 placeOfBirth,
  occupation,
  patientStatus,
  bloodType,
  clinicsite,
  refferedby,
  reffereddate,
  relegion,
  guardian,
  phone,
  email,
  address } = patient
    let data = {firstName,
      middleName,
      lastName,
      sex,
      dateOfBirth,
     placeOfBirth,
      occupation,
      patientStatus,
      bloodType,
      clinicsite,
      refferedby,
      reffereddate,
      relegion,
      guardian,
      phone,
      email,
      address }
    let url = `https://surubasnet4.pythonanywhere.com/patient/`
    axios.post(url, data)
      .then(res => {
        
      })
      .catch(err => {
       
      })

  console.log(patient);
}

let bloodType_arr = Object.entries(bloodType);
  let bloodType_mapping = bloodType_arr.map(el => {
    return <option value={el[1]}>{el[1]}</option>
  })

  let sex_arr = Object.entries(sex);
  let sex_mapping = sex_arr.map(el => {
    return <option value={el[1]}>{el[0]}</option>
  })

  return (
    <div className=''>
      <div className='sticky-top justify-between bg-gray-500 flex'>
        <h1 className="text-xl font-semibold text-white p-3">New Patient</h1>

      </div>
      <div className='m-5'>
     <form className='md:grid md:grid-cols-3 md:gap-4'>
          
          
          <div className='block m-2'>
            <label htmlFor="firstName" className="">
              First name<span className='text-red-500'>*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={patient.firstName}
              onChange={handleChange}

              required
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="First Name"
            />
          </div>
          <div className='block m-2'>
            <label htmlFor="middleName" className="">
              Middle Name
            </label>
            <input
              id="middleName"
              name="middleName"
              type="text"
              value={patient.middleName}
              onChange={handleChange}
              className="block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Middle Name"
            />
          </div>
          <div className='block m-2'>
            <label htmlFor="lastName" className="">
              Last Name<span className='text-red-500'>*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={patient.lastName}
              onChange={handleChange}
              required
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Last Name"
            />
          </div>
          <div className='block m-2'>
            <label htmlFor="sex" className="">
              Sex
            </label>
            <select
              id="sex"
              name="sex"
              value={patient.sex}
              onChange={handleChange}
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              {sex_mapping}
            </select>
          </div>
          <div className='block m-2'>
            <label htmlFor="dob" className="">
              Date of Birth
            </label>
            <input
              id="dob"
              name="dob"
              type="date"
              value={patient.dob}
              onChange={handleChange}
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"

            />
          </div>
          <div className='block m-2'>
            <label htmlFor="pob" className="">
              Place Of Birth
            </label>
            <input
              id="pob"
              name="pob"
              type="text"
              value={patient.pob}
              onChange={handleChange}
              required
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Place of Birth"
            />
          </div>
          <div className='block m-2'>
            <label htmlFor="occupation" className="">
              Occupation
            </label>
            <input
              id="occupation"
              name="occupation"
              type="text"
              value={patient.occupation}
              onChange={handleChange}
              
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Occupation"
            />
          </div>
          <div className='block m-2'>
            <label htmlFor="patientStatus" className="">
              External Patient Id
            </label>
            <input
              id="patientStatus"
              name="patientStatus"
              type="text"
              value={patient.patientStatus}
              onChange={handleChange}
              
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="External Patient Id"
            />
          </div>
          <div className='block m-2'>
            <label htmlFor="bloodType" className="">
              bloodType Group
            </label>
            <select
              id="bloodType"
              name="bloodType"
              value={patient.bloodType}
              onChange={handleChange}
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
             {bloodType_mapping}
            </select>
          </div>
          <div className='block m-2'>
            <label htmlFor="cliniccite" className="">
              Clinic Site
            </label>
            <input
              id="cliniccite"
              name="cliniccite"
              type="text"
              
              value={patient.clinicsite}
              onChange={handleChange}
              required
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Clininc Site"
            />
          </div>
          <div className='block m-2'>
            <label htmlFor="referedby" className="">
              Reffered By
            </label>
            <input
              id="referedby"
              name="referedby"
              type="text"
              value={patient.refferedby}
              onChange={handleChange}
              required
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Reffered By"
            />
          </div>
          <div className='block m-2'>
            <label htmlFor="reffereddate" className="">
              Referred Date
            </label>
            <input
              id="reffereddate"
              name="reffereddate"
              type="text"
              value={patient.reffereddate}
              onChange={handleChange}
              required
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Referred Date"
            /></div>
          <div className='block m-2'>
            <label htmlFor="religion" className="">
              Religion
            </label>
            <input
              id="religion"
              name="religion"
              type="text"
              value={patient.relegion}
              onChange={handleChange}
              required
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Religion"
            />
          </div>
          <div className='block m-2'>
            <label htmlFor="guardain" className="">
              Guardian
            </label>
            <input
              id="guardain"
              name="guardain"
              type="text"
              value={patient.guardian}
              onChange={handleChange}
              required
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Guardian"
            />
          </div>

         
 



        </form>
        <div className='justify-between bg-gray-500 flex'>
        <h1 className="text-xl font-semibold text-white p-3">Contact Details</h1>
      </div>
      <form className=''>
         <div className='md:grid md:grid-cols-3 md:gap-4'>
          <div className='block m-2'>
            <label htmlFor="phone" className="">
              Phone<span className='text-red-500'>*</span>
            </label>
            <input
              id="Phone"
              name="Phone"
              type="text"
              value={patient.phone}
              onChange={handleChange}

              required
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Phone"
            />
          </div>
          <div className='block m-2'>
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              value={patient.email}
              onChange={handleChange}
              className="block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email"
            />
          </div>
          <div className='block m-2'>
            <label htmlFor="address" className="">
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              value={patient.address}
              onChange={handleChange}
              required
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Address"
            />
          </div>
          </div><br/>
          <div className='flex justify-end'>

          <Link type="button" to="/patientlisting" className='border-2 p-1.5 rounded hover:border-red-600 mx-2 hover:bg-white hover:text-red-900 bg-red-600 text-white font-semibold'> Cancel</Link>
          <button className='border-2 p-1.5 rounded border-green-600 mx-2 bg-white text-green-900 hover:bg-green-600 hover:text-white font-semibold' onClick={handleSubmit}> Add</button>
          </div><br/>


        </form>






      </div>
    </div>

  )
}
