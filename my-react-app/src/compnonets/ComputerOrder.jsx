import React , { Suspense, useState } from "react"
import { Await ,useLoaderData , useParams   } from "react-router-dom"
import { Order , postorders } from ".."
import { card1, more } from "../assets"
import SucsessOrder from "./SucsessOrder"
import Error from "./Error"
import Loading from "./Loading"

export const loader = ({params})=>{
  const {id} = params
  console.log(id)

  return {
  data : Order(id)
 }
}

const ComputerOrder = () => {
  const {id} = useParams()
    
  const [success , setSuccess] = useState(false)
  const [errornote , setErrornote] = useState(false)
    const [order , setOrders] = useState({
        name : '',
        phone: '',
        email : '',
        product_id: Number(id)
    }) 
   const [loading , setLoading] = useState(false)
   const [error , setError] = useState(null)
    const loaderData = useLoaderData()
        const handeleOrders = (e)=>{
      setOrders({...order , [ e.target.name] : e.target.value})
    }
    const submiteOrders = async (e)=>{
      e.preventDefault()
     
      setLoading(true)
      try{
      const post = await postorders(order)
      setSuccess(true)
      console.log(post)
    }catch(err){
      
      setError(err.message)
      console.log(error)
      setErrornote(true)
    }
    finally{
      setLoading(false)
    } 
     
    }

  return (
    <div className={`container relative lg:flex w-full justify-between items-center z-0 mt-[5rem]`}>
    <div className="lg:w-[50%]"> 
        <Suspense fallback={<Loading/>}>
            <Await resolve={loaderData.data}>
             {(data)=>{

                return(
                <div className="container relative ">
                   
                
                   <div  className=" z-1 relative flex items-center flex-col justify-between mt-[2rem]  mb-[7rem] ">
                    <img src={card1} className="absolute top-0 right-0 left-0 bottom-0 w-full h-[110%] object-cover z-30 "  alt="" />
                    <div className="flex items-center gap-4 flex-col mb-12">
                        <img src={data.image_url} className="rounded-[1rem] aspect-[20/20]" width={150} height={200} alt="images" />
                        <p>{data.name}</p>
                    </div> 
                        <div className="flex justify-between items-center px-4 pb-[2rem]  w-full">
                         <i className={`${data.category}`}>{data.category}</i>
                         <p className="text-[2rem] font-poppins font-bold">{data.price}$</p>
                    </div>
                    </div>
                   
                
                </div>
                
                )
             }}
            </Await>
        </Suspense>


      
    </div>
    <div className=" max-lg:mb-[10rem] lg:w-[50%] bg-n-7 py-[2rem] px-[1rem] rounded-[2rem] border border-n-5 shadow-md shadow-n-8 ">
      <form onSubmit={submiteOrders}>
        <div className="flex flex-col gap-2  ">
          <label htmlFor="name">name:</label>
          <input type="text" name="name"  className="input " onChange={handeleOrders} value={order.name} />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="email">email:</label>
          <input type="email" name="email" className="input" onChange={handeleOrders} value={order.email} />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="phone">phone:</label>
          <input type="text" name="phone" className="input" onChange={handeleOrders} value={order.phone} />
        </div>
        <button className=" bg-blue-700 p-2 w-full mt-[2rem] rounded-[1rem] font-bold hover:opacity-80 transition-all">{loading ? 'Sending Order...' : 'Order'}</button>
          
      </form>
      {success && (<SucsessOrder onclose={()=> setSuccess(false)} message='Success! 😄' text='all your info are in Order section' />)}
        {errornote && ( <SucsessOrder onclose={()=> setErrornote(false)} message='Error' text={error} className='text-red-800'/>)}
    </div>
    </div>
  )
}

export default ComputerOrder
