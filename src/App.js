import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Component/Main'
import Login from './Component/Login';
import Layout from './Component/Layout'
import AuthProvider from './Component/Auth'
import Profile from './Component/Profile';
import RequireAuth from './Component/RequireAuth';
import User from './Component/User'
import UserList from './Component/UsersList';
import DeleteUser from './Component/DeleteUser';
import Post from './Component/Post'
import Error from './Pages/Error'


export default function App() {

  return (
    <AuthProvider>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<RequireAuth />} >
              <Route index element={<Profile />} />
            </Route>
            <Route path='/user' element={<User />} />
            <Route path='/userlist' element={<UserList />} />
            <Route path='/del' element={<DeleteUser />} />
            <Route path='/post' element={<Post />} />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

