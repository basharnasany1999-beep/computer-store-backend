import {createBrowserRouter,
       createRoutesFromElements ,
        Route,
        RouterProvider
       } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Computers  , {loader as dataCom} from './pages/Computers'
import ComputerOrder ,{loader as orders} from './compnonets/ComputerOrder'
import Orders , {loader as userOrders} from './pages/Orders'
import Contact from './pages/Contact'
const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />} >
     <Route index element={ <Home /> } />
     <Route path='Computers' loader={dataCom}  element={<Computers />} />
     <Route path='Computers/:id' loader={orders} element={<ComputerOrder />} />
     <Route path='orders' loader={userOrders} element={<Orders/>} />
     <Route path='Contact' element={<Contact />}/>
    </Route>
  ))

  return (
   <RouterProvider router={router} />
  )
}

export default App
