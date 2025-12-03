import { Link } from "react-router-dom";
import '../css/dashboard.css'
import SidebarDashboard from "../layouts/SidebarDashboard";
import {Outlet} from 'react-router-dom'
import HeaderDashboard from "../layouts/HeaderDashboard";
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Dashboard() {
     const navigate = useNavigate()
    const [perfiles, setPerfiles] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("token")
        const user = JSON.parse(localStorage.getItem("user"))

        if (!token || !user) {
            navigate("/login")
            return
        }
   }, [])
  return (
 <>
<div className="bg-dark text-light">
<div className="container-fluid">
  <div className="row">


<SidebarDashboard></SidebarDashboard>

    <main className="col-md-10 col-sm-12 p-4">
  
<HeaderDashboard></HeaderDashboard>

<Outlet></Outlet>

    </main>
  </div>
</div>

</div>
 </>
  )
}
