import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setOpen,setInventory,setPatient,setScheduling,setImaging,setMedication,setLabs,setBilling,setIncident,setAdmin } from './redux/navSlice';
import { logout } from "./redux/loginSlice";
export default function Navbar() {

   

    const open = useSelector((state) => state.nav.open)
    const inventory =useSelector((state)=>state.nav.inventory)
    const patient =useSelector((state)=>state.nav.patient)
    const scheduling =useSelector((state)=>state.nav.scheduling)
    const imaging =useSelector((state)=>state.nav.imaging)
    const medication =useSelector((state)=>state.nav.medication)
    const labs =useSelector((state)=>state.nav.labs)
    const billing =useSelector((state)=>state.nav.billing)
    const incident =useSelector((state)=>state.nav.incident)
    const admin =useSelector((state)=>state.nav.admin)
    

    const dispatch = useDispatch()
    
    return (
        <div>
            <div
                
                className={` ${open ? "w-72" : "hidden lg:block lg:w-20"

                    } bg-dark-purple min-h-screen  max-h-full p-5  absolute lg:relative duration-300 `}
            >
                <i className={`text-white fa-sharp fa-solid fa-arrow-left absolute cursor-pointer fa-lg m-3 -right-3 top-6 w-7 
             ${!open && "rotate-180 text-white rounded-full "} `}
             onClick={ () =>dispatch(setOpen())}></i>

                    
                <div className="flex items-center">
                    <i className={`fa-solid fa-hospital fa-xl text-white cursor-pointer duration-500 px-2 ${open && "rotate-[360deg]"
                        }`}></i>
<Link to="/">
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Hospital
                    </h1>
                    </Link>
                </div>




                <ul className="pt-7">
                    <form class="flex items-center ">
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class={`${!open && "hidden"} origin-left duration-200 relative w-full`}>
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
                            </div>
                            <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 px-3.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required="" />
                        </div>
                        <button type="submit" className='rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm justify-between'>
                            <i class="fa-solid fa-magnifying-glass text-gray-400 fa-lg"></i>
                        </button>
                    </form>

                    <li
                        className={`flex  rounded-md p-2 px-3 py-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`} onClick={() => dispatch(setInventory())}>
                        <i className={'fa-solid fa-box '}></i>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Inventory
                        </span>
                    </li>

                    <div className={`${inventory ? "show" : "hidden"} m-1 `}>
                        <Link to="inventoryrequest"><li
                            className={`flex  rounded-md p-2 px-3 m-0 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Requests
                            </span>
                        </li>
                        </Link>
                        <Link to="inventoryitems"><li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Items
                            </span>
                        </li>
                        </Link>
                        <Link to="inventoryreceived">
                            <li
                                className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                                <i class="fa-solid fa-caret-right fa-sm"></i>
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    Inventory Received
                                </span>
                            </li>
                        </Link>
                        <Link to="inventoryreports">
                            <li
                                className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                                <i class="fa-solid fa-caret-right fa-sm"></i>
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    Reports
                                </span>
                            </li>
                        </Link>

                    </div>
                    <li
                        className={`flex  rounded-md p-2 px-3 py-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`} onClick={() => dispatch(setPatient())}>
                        <i class="fa-solid fa-users "></i>

                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Patients
                        </span>
                    </li>
                    <ul className={`${patient ? "show" : "hidden"} m-1 `}>
                        <Link to="patientlisting">
                            <li
                                className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                                <i class="fa-solid fa-caret-right fa-sm"></i>
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    Patient Listing
                                </span>
                            </li>
                        </Link>
                        <Link to="patientadmitted">
                            <li
                                className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                                <i class="fa-solid fa-caret-right fa-sm"></i>
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    Admitted Patients
                                </span>
                            </li>
                        </Link>
                        <Link to="outpatient">
                            <li
                                className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                                <i class="fa-solid fa-caret-right fa-sm"></i>
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    Outpatient
                                </span>
                            </li>
                        </Link>
                        <Link to="newpatient">
                            <li
                                className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                                <i class="fa-solid fa-caret-right fa-sm"></i>
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    New Patient
                                </span>
                            </li>
                        </Link>
                        <Link to="patientreport">
                            <li
                                className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                                <i class="fa-solid fa-caret-right fa-sm"></i>
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    Reports
                                </span>
                            </li>
                        </Link>
                    </ul>
                    <li
                        className={`flex  rounded-md p-2 px-3 py-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`} onClick={() => dispatch(setScheduling())}>
                        <i class="fa-solid fa-calendar-days"></i>

                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Scheduling
                        </span>
                    </li>
                    <ul className={`${scheduling ? "show" : "hidden"} m-1 `}>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Appointments This Week
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Today's Appointments
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Appointment Search
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Appointment's Calendar
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Add Appointment
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Theater Schedule
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Schedule
                            </span>
                        </li>
                    </ul>
                    <li
                        className={`flex  rounded-md p-2 px-3 py-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`} onClick={() => dispatch(setImaging())}>
                        <i class="fa-solid fa-camera"></i>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Imaging
                        </span>
                    </li>
                    <ul className={`${imaging ? "show" : "hidden"} m-1 `}>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Requests
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Completed
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                New Requests
                            </span>
                        </li>
                    </ul>
                    <li
                        className={`flex  rounded-md p-2 px-3 py-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`} onClick={() => dispatch(setMedication())}>
                        <i class="fa-solid fa-notes-medical"></i>

                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Medication
                        </span>
                    </li>
                    <ul className={`${medication ? "show" : "hidden"} m-1 `}>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Request
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Completed
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                New Request
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Dispence
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Return Medication
                            </span>
                        </li>
                    </ul>
                    <li
                        className={`flex  rounded-md p-2 px-3 py-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`} onClick={() => dispatch(setLabs())}>
                        <i class="fa-solid fa-microscope"></i>

                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Labs
                        </span>
                    </li>
                    <ul className={`${labs ? "show" : "hidden"} m-1 `}>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Requests
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Completed
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                New Requests
                            </span>
                        </li>
                    </ul>
                    <li
                        className={`flex  rounded-md p-2 px-3 py-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`} onClick={() => dispatch(setBilling())}>
                        <i class="fa-solid fa-money-bill"></i>

                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Billing
                        </span>
                    </li>
                    <ul className={`${billing ? "show" : "hidden"} m-1 `}>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Invoices
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                New Invoices
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Prices
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Price Profiles
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Cashier
                            </span>
                        </li>
                    </ul>
                    <li
                        className={`flex  rounded-md p-2 px-3 py-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`} onClick={() => dispatch(setIncident())}>
                        <i className='fa-solid fa-box '></i>

                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Incident
                        </span>
                    </li>
                    <ul className={`${incident ? "show" : "hidden"} m-1 `}>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Current Incidents
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                New Incident
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                History
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Reports
                            </span>
                        </li>
                    </ul>
                    <li
                        className={`flex  rounded-md p-2 px-3 py-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`} onClick={() => dispatch(setAdmin())}>
                        <i class="fa-solid fa-user"></i>

                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Administration
                        </span>
                    </li>
                    <ul className={`${admin ? "show" : "hidden"} m-1 `}>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Address Fields
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Custom Forms
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Incident Categories
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Load DB
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Lookup Lists
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Short codes
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Print Header
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                caret-right
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                New User
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                User Roles
                            </span>
                        </li>
                        <li
                            className={`flex  rounded-md p-2 px-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}>
                            <i class="fa-solid fa-caret-right fa-sm"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                About
                            </span>
                        </li>
                    </ul>
                    <li
                        className={`flex  rounded-md p-2 px-3 py-3 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-2 px-3`}  onClick={() => dispatch(logout())}>
                       <i class="fa-solid fa-right-from-bracket"></i>

                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Logout
                        </span>
                    </li>

                </ul>
            </div>
        </div>
    )
}
