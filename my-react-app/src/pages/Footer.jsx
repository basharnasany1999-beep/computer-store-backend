import { data } from "react-router-dom"
import { footer } from "../context"


const Footer = () => {
  return (
    <div className=" container relative">
        <div className="lg:flex justify-between items-center w-full border-t border-n-4 p-4 mb-20">
                <h4 className="body-2 text-n-4 text-center text-[1rem] font-mono  tracking-wider ">{new Date().getFullYear()} check our products in the computer section  </h4>
           
                <ul className="flex max-md:justify-between  justify-center items-center max-lg:mt-10 gap-5">
                {footer.map((item , i)=>(
                 <li key={item.id} className="w-[2.50rem] h-[2.50rem]  bg-n-6 rounded-full p-3 cursor-pointer" >
                    <img src={item.iconUrl} width={30} height={30} alt="icons" />
                 </li>
                ))}
                </ul>
                
        </div>
      
    </div>
  )
}

export default Footer
