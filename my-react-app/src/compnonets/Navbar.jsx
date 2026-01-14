import { NavLink } from "react-router-dom"
import { nav } from "../context"
import { logo } from "../assets"

const Navbar = () => {
  const  style = {
        color: 'white',
        borderRight : '1px solid  ',
        borderLeft : '1px solid'
      }
  return (
    <div className="container relative z-10">
      <NavLink to='.' className="flex justify-start gap-2 mt-2 -ml-1 items-center">
      <img src={logo} width={50} height={50} alt="" />
      <h1 className="h5 font-poppins tracking-wider ">VANCOM</h1>
      </NavLink>
      <ul  className="fixed bottom-0 w-full lg:flex lg:items-center  left-0 lg:top-0 h-[5rem] lg:border-b border-t border-n-5 p-3 lg:p-6 bg-n-8">
        <div className="flex items-center max-lg:justify-between justify-start md:gap-10  ">
          <div className="flex gap-2 items-center max-lg:hidden">
            <img src={logo} width={60} height={60} alt="logo" />
             <h1 className="h4 font-poppins tracking-wider ">VANCOM</h1>
          </div>
        {nav.map((item , i) => (
        
            <NavLink style={ ({isActive})=> isActive ? style : null } to={`${item.title === 'Home' ? '.' : item.title}`}>
          <div key={i} className="flex-1 w-full">
            <div className="flex flex-col lg:flex-row text-n-3 hover:text-n-1 items-center  justify-center rounded-[1rem] px-1 py-0.5  gap-2 ">
             <img src={item.icon} width={25} className="lg:hidden" height={25} alt={item.title} />
              <li className="body-2 font-code  font-bold ">{item.title}</li>
            </div>
             
          </div>
         </NavLink>
        ))}
        </div>
      </ul>
    </div>
  )
}

export default Navbar
