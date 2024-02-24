import { useState } from 'react'
import './Styles/App.scss'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

//Import layout
import Layout from './layout/Layout';
import AdminLayout from './layout/admin/AdminLayout'

//Import Page
import Home from './pages/Home';
import Login from './pages/Login'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminService from './pages/admin/AdminService'


function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Public */}
        <Route path='/' element={<Layout />}>

          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Route>

        {/* Admin */}
        <Route path='/admin' element={<AdminLayout />} >

          <Route index element={<AdminDashboard />} />
          <Route path='/admin/service' element={<AdminService />} />

        </Route>

      </>
    )
  )

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
