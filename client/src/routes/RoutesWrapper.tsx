import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from '../components/Home/Home';
import Gallery from '../components/Gallery/Gallery';
import Upload from '../components/Upload/Upload';
import Comments from '../components/Comments/Comments';
import Logout from '../components/Logout/Logout';
import Profile from '../components/Profile/Profile';
import EditProfile from '../components/EditProfile/EditProfile';
import Register from '../components/Register/Register';
import Default from '../components/Default/Default';
import Contact from '../components/Contact/Contact';
import Booking from '../components/Booking/Booking';
import Login from '../components/Login/Login';

import AdminGuard from '../guards/AdminGuard';
import AuthGuard from '../guards/AuthGuard';

const RoutesWrapper: React.FC = () => {
  return (
    <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route
                path='/upload'
                element={
                    <AdminGuard>
                            <Upload />
                    </AdminGuard>
                }
            />
            <Route element={<AuthGuard />}>
                <Route path='/gallery/:id/comments' element={<Comments />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/profile/:id' element={<Profile />} />
                <Route path='/profile/edit/:id' element={<EditProfile />} />
            </Route>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/booking' element={<Booking />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Default />} />
        </Routes>
  )
}

export default RoutesWrapper
