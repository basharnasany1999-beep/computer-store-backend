import { computer_home } from "../assets"
import { Link } from "react-router-dom"
import About from "../compnonets/About"

const Home = () => {
  return (
    <div className="container relative z-5 mb-11 ">
      <div className=" relative mb-10 flex justify-center items-center mt-12  h-[50vh] lg:h-[60vh]">
        <div className=" absolute inset-0 ">
          <img src={computer_home} className="w-full h-full rounded-[1rem] object-cover" alt="computer_home" />
        </div> 
        <div className="z-10 px-4">
          <h1 className="h5 text-center text-n-3 font-poppins">Enterthe world <strong className="text-n-5 font-bold font-code"> of new features</strong> and dreams</h1>
          <p className="body-2 text-n-4 text-center mt-4">are you ready for getting in ? press the button </p>
       <Link to='Computers'>
        <button className="mt-10 py-2 bg-n-1  w-full z-10 rounded-lg text-n-8 font-grotesk tracking-wider font-bold hover:bg-n-3 "> get in</button>
       </Link>
        </div>
      </div>
      <About/>
    </div>
  )
}

export default Home
