import axios from 'axios';
import moment from 'moment/moment';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { bloodType, sex } from '../../components/constants/blood'
import { Link, useNavigate } from "react-router-dom"

export default function EditPatient() {

  const navigate = useNavigate();
  const id = useSelector((state) => state.patient.id)
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get(`https://surubasnet4.pythonanywhere.com/patient/${id}/`, {
      headers: {
        'Authorization': `token ${localStorage.getItem("access_token")}`
      }
    })
      .then(res => {
        setList(res.data)
        console.log(res.data);

      })
  }, [])

  const [patient, setPatient] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    sex: "Male",
    dateOfBirth: "",
    placeOfBirth: "",
    occupation: "",
    patientStatus: "",
    bloodType: "A+",
    patientType: "",
    referBy: "",
    refferedDate: "",
    religion: "",
    parent_guardian: "",
    phone: "",
    email: "",
    address: ""
  })



  const handleChange = (e) => {
    console.log({ e })
    console.log(e.target.value)
    setPatient({ ...patient, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { firstName,
      middleName,
      lastName,
      sex,
      dateOfBirth,
      placeOfBirth,
      occupation,
      patientStatus,
      bloodType,
      patientType,
      referBy,
      refferedDate,
      religion,
      parent_guardian,
      phone,
      email,
      address } = patient

    let data = {
      firstName,
      middleName,
      lastName,
      sex,
      dateOfBirth,
      placeOfBirth,
      occupation,
      patientStatus,
      bloodType,
      patientType,
      referBy,
      refferedDate,
      religion,
      parent_guardian,
      phone,
      email,
      address
    }
    if (data.dateOfBirth === "") {
      data.dateOfBirth = null;
    }

    let url = `https://surubasnet4.pythonanywhere.com/patient/`
    axios.post(url, data, {
      headers: {
        'Authorization': `token ${localStorage.getItem("access_token")}`
      }
    })
      .then(res => {
        alert("Your Form submitted Succesfully");
        navigate("/patientlisting")
      })
      .catch(err => {
        alert("Please enter your data propperly and Try again");
      })

  }

  function calculateAge(date) {

    let words = date?.split('-');
    let nowyear = new Date().getFullYear();

    let age = "Not Available"

    if (words != undefined) {
      age = moment(words[0] + words[1] + words[2], "YYYYMMDD").fromNow();
    }

    return age
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
    <div>
      <div className='sticky-top justify-between bg-gray-500 flex'>
        <h1 className="text-xl font-semibold text-white p-3">Edit Patient</h1>

      </div>


      <div className="flex justify-center m-3">
        <div className="rounded-lg shadow-lg bg-white w-full p-3">
          <table className='table-auto px-2'>
            <tbody>
              <tr>
                <td className='px-4 text-lg'>Name</td>
                <td><span className='text-2xl'> {list.firstName} {list.lastName}</span></td>
              </tr>
              <tr>
                <td className='px-4 text-lg'>Sex</td>
                <td><span className='text-lg'> {list.sex} </span></td>
              </tr>
              <tr>
                <td className='px-4 text-lg'>Age</td>
                <td><span className='text-lg'> {calculateAge(list.dateOfBirth)} </span></td>
              </tr>
            </tbody>
          </table>

          <div className="p-6">
            <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab"
              role="tablist">
              <li className="nav-list" role="presentation">
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
              <li className="nav-list" role="presentation">
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
              <li className="nav-list" role="presentation">
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
              <li className="nav-list" role="presentation">
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
                <form className='m-5' >
                  <div className='md:grid md:grid-cols-3 md:gap-4'>


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
                      <label htmlFor="dateOfBirth" className="">
                        Date of Birth
                      </label>
                      <input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        value={patient.dateOfBirth}
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

                        value={patient.patientType}
                        onChange={handleChange}

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
                        value={patient.referBy}
                        onChange={handleChange}

                        className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Reffered By"
                      />
                    </div>
                    <div className='block m-2'>
                      <label htmlFor="refferedDate" className="">
                        Referred Date
                      </label>
                      <input
                        id="refferedDate"
                        name="refferedDate"
                        type="text"
                        value={patient.refferedDate}
                        onChange={handleChange}

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
                        value={patient.religion}
                        onChange={handleChange}

                        className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Religion"
                      />
                    </div>
                    <div className='block m-2'>
                      <label htmlFor="guardain" className="">
                        parent_guardian
                      </label>
                      <input
                        id="guardain"
                        name="guardain"
                        type="text"
                        value={patient.parent_guardian}
                        onChange={handleChange}

                        className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="parent_guardian"
                      />
                    </div>






                  </div>
                  <div className='justify-between bg-gray-500 flex'>
                    <h1 className="text-xl font-semibold text-white p-3">Contact Details</h1>
                  </div>
                  <div className=''>
                    <div className='md:grid md:grid-cols-3 md:gap-4'>
                      <div className='block m-2'>
                        <label htmlFor="phone" className="">
                          Phone<span className='text-red-500'>*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
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

                          className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="Address"
                        />
                      </div>
                    </div><br />
                  


                  </div>






                </form>
              </div>
              <div className="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
                Tab 3 content
              </div>
              <div className="tab-pane fade" id="tabs-contact" role="tabpanel" aria-labelledby="tabs-contact-tab">
                Tab 4 content
              </div>
            </div>


          </div>
          <form className='flex justify-end'>
            <Link type='button' className='border-2 p-1.5  rounded border-red-600 mx-2 bg-white text-red-900 hover:bg-red-600 hover:text-white font-semibold' to="/patientlisting">Return</Link>
            <button type='submit' className='border-2 p-1.5 rounded border-green-600 mx-2 bg-white text-green-900 hover:bg-green-600 hover:text-white font-semibold' onClick={handleSubmit} > Update</button>
          </form>
        </div>

      </div>



    </div>
  )
}
