
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { UserContextProvider } from './context/userContext'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/home'

axios.defaults.baseURL ='http://localhost:5000'; 
axios.defaults.withCredentials = true;
function App() {
 

  return (
  <>
    <UserContextProvider>
     <Navbar/>
     <Toaster position='bottom-right'n toastOptions={{duration:2000}}/>
     <Routes>
     {/* <Route element={<PrivateRoutes/>}>
     
      </Route>  */}
      <Route path='/' element= {<Home/>} />
      <Route path ='/login' element ={<Login/>} />
      <Route path='/register' element ={<Register/>}/> 
      <Route path='/dashboard' element ={<Dashboard/>}/>
     </Routes>
     </UserContextProvider>
    </>
  )
}

export default App
