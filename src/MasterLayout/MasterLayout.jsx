import React from 'react'
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from 'react-router-dom';


export default function Masterlayout({userData,setuserData}) {
  return (
    <>
      <Navbar  setuserData={setuserData} userData={userData}/>
      <Outlet></Outlet>
      <Footer/>
    </>
  )
}