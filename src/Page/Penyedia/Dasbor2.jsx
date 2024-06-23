import React from 'react'
import Navbar from '../../Components/Penyedia/Navbar'
import Sidebar from '../../Components/Penyedia/Sidebar'
import Menunggu from '../../Components/Penyedia/Menunggu'
import '../../Assets/Penyedia/css/Dasbord.css';

const Dasbor2 = () => {
  return (
    <>
      <div className='Utama'>
        <div>
          <Sidebar />
        </div>
        <div className='Main-Contain'>
          <Navbar />
          <Menunggu />
        </div>
      </div>
    </>
  )
}

export default Dasbor2