import React , {Suspense} from 'react'
import { computers } from '../index'
import { useLoaderData , Await , useSearchParams, Link } from 'react-router-dom'
import { filter } from '../context'
import { close } from '../assets'
import Loading from '../compnonets/Loading'


export const loader = async () => {
 
  return{
    data : computers()
  }

}


const Computers = () => {
  
  const data = useLoaderData()
  const [search ,  setSearch] = useSearchParams()
  const params = search.get('type')
 
 return (
   <div className="container relative">
   
      <ul className='flex flex-wrap lg:justify-start lg:gap-5  items-center gap-3 mt-12'>
      {filter.map((item , i)=> (
        <li key={i} className={`${params === item ? item : '' }   border border-n-1/20 p-2  z-1 rounded-[2rem] transition-all hover:border-n-1  `}  onClick={()=> setSearch({type : item})}>{item}</li>
      ))}
      </ul>
      {params ? (
        <div className='mt-5 px-3 rounded-[2rem] py-2 bg-red-900/50 w-[10rem] flex justify-between hover:bg-red-900/65 cursor-pointer ' onClick={()=> setSearch('')}>
          <p>{params}</p>
          <img src={close} width={20} height={20} alt="close" />
        </div>
      ) : null}
    
    <Suspense fallback={ <Loading/>  }>
      <Await resolve={data.data}>
        {(data)=>{

          const filterData = params ? data.filter(da => da.category === params) : data 
          
          return(
            <div className='md:grid grid-cols-2 mt-16 mb-24 gap-4'>
            {filterData.map(( item , i  )=>(
              <Link key={item.id} to={`${item.id}`} >
            <div  className='bg-n-8 border border-n-6 mb-7 rounded-[2rem] p-4 hover:scale-[1.02]  transition-all'   key={item.id}>
             <div className=" flex justify-between items-center z-1">
               <p className='flex flex-col'>{item.name} <i className={`${item.category} px-2 py-1 my-2 w-[7rem] rounded-sm text-start`}>{item.category}</i></p>
               <img src={item.image_url} className=' rounded-[1rem] aspect-[20/20]' width={100} height={100} alt={item.title} />
             </div>
            </div>
             </Link>
          ))}
            </div>
          )
        }}

      </Await>
    </Suspense>
    </div>
  )

}

export default Computers
