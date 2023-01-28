import React from 'react'
import Jobform from '../Admin/Jobform'
import Joblisting from '../Admin/Joblisting'
import Login from '../Auth/Login'
import Signup from '../Auth/Signup'
import { Route,Routes } from 'react-router-dom'
import { Admin } from '../Admin/Admin'
import Authenticate from '../Auth/Authenticate'
import User from '../User/User'

function AllRouter() {
  return (
    <div>
        <Routes>
          
            <Route path="/authenticate" element={<Authenticate/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/user" element={<User/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/jobform" element={<Jobform/>}></Route>
            <Route path="/joblisting" element={<Joblisting/>}></Route>
            <Route path='/admin' element={<Admin/>}/>
        </Routes>
    </div>
  )
}

export default AllRouter