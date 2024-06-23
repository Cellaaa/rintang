import React from 'react'
import { Link } from 'react-router-dom'
import No from '../../Assets/Penyedia/img/Sorry.svg'
import '../../Assets/Penyedia/css/Tunggu.css'

const Ditolak = () => {
  return (
    <>
    <div className='tunggu'>
      <div className='content'>
        <img className='icon1' src={No} alt="No"/>
        <div className='text'>
          Maaf Data Anda Ditolak Oleh Admin
        </div>
        <Link to='/formpenyedia'>
        <div className='subtext2' >
          *Isi Ulang Formulir Data*
        </div></Link>
      </div>
    </div> 
       </>
  )
}

export default Ditolak