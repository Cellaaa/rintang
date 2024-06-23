import React from 'react'
import Navbar from '../../Components/Penyedia/Navbar'
import Diterima from '../../Components/Penyedia/Diterima'
import Sidebar from '../../Components/Penyedia/Sidebar'
import '../../Assets/Penyedia/css/Dasbord.css';

const DasborYes = () => {
  return (
    <>
    <div className='Utama'>
      <div>
        <Sidebar/>
        </div>
    <div className='Main-Contain'>
      <Navbar/>
    <Diterima/>
    </div>
    </div>
    </>
  )
}

export default DasborYes