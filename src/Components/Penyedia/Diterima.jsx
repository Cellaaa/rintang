import React from 'react';
import { Link } from 'react-router-dom';
import Yes from '../../Assets/Penyedia/img/Yess.svg'; // Ensure this path is correct
import '../../Assets/Penyedia/css/Tunggu.css'; // Ensure this path is correct

const Diterima = () => {
  return (
    <>
      <div className='tunggu'>
        <div className='content'>
          <img className='icon2' src={Yes} alt="yes" />
          <div className='text'>
          Data Anda Sudah Diverifikasi Oleh Admin
          </div>
          <Link to='/dashboard'>
          <div className='subtext2' >
          *Ketuk Untuk Melanjutkan*
          </div>
          </Link>
        </div>
      </div>
    </>

  );
};

export default Diterima;
