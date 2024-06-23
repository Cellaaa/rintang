import React from 'react'
import '../../Assets/Penyedia/css/Dasbord.css'
import '../../Assets/Admin/css/persetujuan.css'
import Side_bar from '../../Components/Admin/Side_bar'
import Profile_nav from './Profile_nav'
import Persetujuan from '../../Components/Admin/Persetujuan'

const TerimaTolak = () => {
  return (
    <div className='Utama-verif'>
    <div>
      <Side_bar />
    </div>
    <div className='Contain-verif'>
        <Profile_nav />
        <Persetujuan />
      </div>
    </div>
  )
}

export default TerimaTolak