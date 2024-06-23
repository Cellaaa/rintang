import React from 'react'
import Popup from '../../Components/Penyedia/Popup'

const DasborPopup = () => {
  return (
    <>
    <div className='Utama'>
      <div>
        <Sidebar/>
        </div>
    <div className='Main-Contain'>
      <Navbar/>
    <Popup/>
    </div>
    </div>
    </>
  )
}

export default DasborPopup