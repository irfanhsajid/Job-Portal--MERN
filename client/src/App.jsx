
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { UserContextProvider } from './context/userContext'
import Dashboard from './pages/Dashboard'
import JobPortal from './pages/JobPortal'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/home'
import PrivateRoutes from './utils/PrivateRoutes'

//cors policy setup
axios.defaults.baseURL = 'https://auth-skeleton-api.vercel.app';
axios.defaults.withCredentials = true;

function App() {


  return (
    <>
      <UserContextProvider>
        <Navbar />
        <Toaster position='top-right' n toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/jobportal' element={<JobPortal />} />
          </Route>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App;
