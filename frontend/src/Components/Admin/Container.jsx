import React from 'react'
import AdminNavbar from './AdminNavbar'
import Dashboard from './Dashboard'
import Users from './Users'
import ContentManagement from './ContentManagement'

const Container = ({showContent}) => {
  return (
    <div className=' lg:w-[85%] '>
        {/* admin navbar */}
        {/* <AdminNavbar /> */}
      {
          (showContent == 'content_management')? <ContentManagement />
          : (showContent == 'users')? <Users/>
          : <Dashboard />
      }
    </div>
  )
}

export default Container