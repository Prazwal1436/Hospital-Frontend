
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Ireceived from "./pages/inventory/Ireceived";
import Request from "./pages/inventory/Request"
import Items from "./pages/inventory/Items"
import Reports from "./pages/inventory/Reports"
import Welcome from "./pages/Welcome";
import Listing from "./pages/patient/Listing";
import Admitted from "./pages/patient/Admitted";
import Outpatient from "./pages/patient/Outpatient";
import EditPatient from "./pages/patient/EditPatient";
import Newpatient from "./pages/patient/Newpatient";
import Preports from "./pages/patient/Preports";
import { useSelector,useDispatch} from 'react-redux'
import Login from "./Login";
import { login } from "./components/redux/loginSlice";


const App = () => {
  const dispatch=useDispatch();
  const status = useSelector((state) => state.login.status)
  if (localStorage.getItem("access_token")) {
    dispatch(login())}
  
  return (
   <div>
      {!status?(<Login/>):(
        <div className="relative lg:flex">
        <Navbar/>
      <div className="h-full lg:h-full min-h-screen flex-1 ">
        <Header/>
        <Routes>
          <Route path="/" element={<Welcome/>}/>

          <Route path="/inventoryrequest" element={<Request/>}/>
          <Route path="/inventoryitems" element={<Items/>}/>
          <Route path="/inventoryreceived" element={<Ireceived/>}/>
          <Route path="/inventoryreports" element={<Reports/>}/>

          <Route path="/patientlisting" element={<Listing/>}>
            
          </Route>
          <Route path="/patientadmitted" element={<Admitted/>}/>
          <Route path="/outpatient" element={<Outpatient/>}/>
          <Route path="/newpatient" element={<Newpatient/>}/>
          <Route path="/patientreport" element={<Preports/>}/>
          <Route path="/editpatient" >
          <Route path=":id" element={<EditPatient/>} />
          </Route>

        </Routes>
      </div></div>)}
      
    </div>
  );
};
export default App;