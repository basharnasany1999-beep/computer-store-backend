import { Outlet } from "react-router-dom"
import Navbar from "../compnonets/Navbar"
import Footer from "./Footer"

const Layout = () => {
  return (
    <div className="w-full h-full">
     <Navbar />
     <Outlet />
      <Footer/>
    </div>
  )
}

export default Layout
