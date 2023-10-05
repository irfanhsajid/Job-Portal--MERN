
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { UserContextProvider } from './context/userContext'
import CreateJob from './pages/CreateJob'
import Dashboard from './pages/Dashboard'
import EditJobs from './pages/EditJobs'
import Login from './pages/Login'
import ManageJobs from './pages/ManageJobs'
import Register from './pages/Register'
import ViewJobs from './pages/ViewJobs'
import PrivateRoutes from './utils/PrivateRoutes'

//cors policy setup
axios.defaults.baseURL = 'https://auth-skeleton-api.vercel.app';
// axios.defaults.baseURL = 'http://localhost:7000';
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
            <Route path='/viewjobs' element={<ViewJobs />} />
            <Route path='/createjobs' element={<CreateJob />} />
            <Route path='/managejobs' element={<ManageJobs />} />
            <Route path='/editjobs/:_id' element={<EditJobs />} />
          </Route>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App;
