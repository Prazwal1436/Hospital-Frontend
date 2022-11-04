import React from 'react'


export default function Newpatient() {
  return (
    <div className=''>
      <div className='sticky-top justify-between bg-gray-500 flex'>
        <h1 className="text-xl font-semibold text-white p-3">New Patient</h1>

      </div>
      <div className='m-5'>
     <form className='md:grid md:grid-cols-3 md:gap-4'>
          <div className='block m-2'>
            <label htmlFor="firstname" className="">
              First name<span className='text-red-500'>*</span>
            </label>
            <input
              id="firstname"
              name="firstname"
              type="text"

              required
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="First Name"
            />
          </div>
          <div className='block m-2'>
            <label htmlFor="middlename" className="">
              Middle Name
            </label>
            <input
              id="middlename"
              name="middlename"
              type="text"

              className="block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Middle Name"
            />
          </div>
          <div className='block m-2'>
            <label htmlFor="lastname" className="">
              Last Name<span className='text-red-500'>*</span>
            </label>
            <input
              id="lastname"
              name="lastname"
              type="text"
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
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
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
              required
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Occupation"
            />
          </div>
          <div className='block m-2'>
            <label htmlFor="epatientid" className="">
              External Patient Id
            </label>
            <input
              id="epatientid"
              name="epatientid"
              type="text"
              required
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="External Patient Id"
            />
          </div>
          <div className='block m-2'>
            <label htmlFor="blood" className="">
              Blood Group
            </label>
            <select
              id="blood"
              name="blood"
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>O+</option>
              <option>O-</option>
              <option>AB+</option>
              <option>AB-</option>
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
              required
              className=" block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Address"
            />
          </div>
          </div><br/>
          <div className='flex justify-end'>

          <button className='border-2 p-1.5 rounded hover:border-red-600 mx-2 hover:bg-white hover:text-red-900 bg-red-600 text-white font-semibold'> Cancel</button>
          <button className='border-2 p-1.5 rounded border-green-600 mx-2 bg-white text-green-900 hover:bg-green-600 hover:text-white font-semibold'> Add</button>
          </div><br/>


        </form>






      </div>
    </div>

  )
}
