import React from 'react'
import Card_tukang from '../Components/Card_tukang'
import Navbar from '../Components/Navbar'
import SearchBar from '../Components/SearchBar'
import Navbar_deskripsi from '../Components/Navbar_deskripsi'




const Dashboard_pencari = () => {
  return (
    <>
      <Navbar_deskripsi/>
    
      <SearchBar/> 
     
      <Card_tukang/>
    </>
  )
}

export default Dashboard_pencari
