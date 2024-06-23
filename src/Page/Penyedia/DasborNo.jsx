import React from 'react'
import Sidebar from '../../Components/Penyedia/Sidebar'
import Navbar from '../../Components/Penyedia/Navbar'
import Ditolak from '../../Components/Penyedia/Ditolak'
import '../../Assets/Penyedia/css/Dasbord.css';

const DasborNo = () => {
  return (
    <>
    <div className='Utama'>
      <div>
        <Sidebar/>
        </div>
    <div className='Main-Contain'>
      <Navbar/>
    <Ditolak/>
    </div>
    </div>
    </>
  )
}

export default DasborNo