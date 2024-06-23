import React from 'react'
import { Link } from 'react-router-dom'
import Done from '../../Assets/Penyedia/img/Done.svg'
import '../../Assets/Penyedia/css/Tunggu.css'

const Menunggu = () => {
  return (
    <div className='tunggu'>
      <div className='content'>
        <img className='icon0' src={Done} alt="Done"/>
        <div className='text'>
          Terima Kasih telah melengkapi data
        </div>
        <Link to='/verifikasiberhasil'>
        <div className='subtext'>
          Menunggu Verifikasi Admin...
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Menunggu
