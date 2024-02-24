import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
//Import login context
import { LoginContext } from '../../context/LoginContext';
import AdminSidebar from './AdminSidebar';


const AdminLayout = () => {
  const { user } = useContext(LoginContext)


  if (!user) {
    return <Navigate to='/login' replace />
  }

  return (
    <>
      <div className="AdminlayoutContainer">
        <AdminSidebar />
        <Outlet />
      </div>
    </>
  )
}

export default AdminLayout