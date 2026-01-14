import React , { Suspense} from "react"
import { userOrders } from ".."
import { Await , useLoaderData , Link} from "react-router-dom"
import Loading from "../compnonets/Loading"


export  const loader = async ()=>{

  return{
    data : userOrders()
  }
}

const Orders = () => {

  const loaderData = useLoaderData()
  return (
    <Suspense fallback={ <Loading/>}>
      <Await resolve={loaderData.data}>
        {(data)=>{          
          return(
            <div className=' container relative md:grid grid-cols-3 mt-16 mb-24  gap-4'>
            {data.map(( item , i  )=>(
              
            <div  className=' relative bg-n-8 flex justify-center flex-col items-center z-1 border border-n-6 mb-7 rounded-[2rem] p-4  shadow-sm shadow-n-7'   key={item.id}>
               <img src={item.image} className=' rounded-[1rem]  h-[10rem] w-[50%] ' width={100} height={100} alt={item.title} />
             <div className="flex  items-center my-4  justify-center flex-col gap-3 ">
               <p className=''>{item.product_name} </p>
               <i className={`${item.category} px-2 py-1 my-2 w-[7rem] rounded-sm text-start`}>{item.category}</i>
             </div>
             <div className="flex flex-col  items-start w-full gap-4">
              <p className="info "> <strong className="text-n-1"> name :</strong> {item.customer_name}</p>
              <p className="info"><strong className="text-n-1">time order : </strong>{item.order_time.slice(11, 16)} </p>
              <p className="info"><strong className="text-n-1">price :</strong> {item.price}$ </p>

             </div>
            </div>
            
          ))}
            </div>
          )
        }}

      </Await>
    </Suspense>
  )
}

export default Orders
