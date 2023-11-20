import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Student from './Student';
import Campus from './Campus';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import SingleStudent from './SingleStudent';
import SingleCampus from './SingleCampus';
/* 
    This is you entry point for your routes
*/
const Main = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
            </div>
            <div>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='students' element={<Student />} />
                    <Route path='/students/:id' element={<SingleStudent />} />
                    <Route path='campuses' element={<Campus />} />
                    <Route path='/campuses/:id' element={<SingleCampus />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default Main;