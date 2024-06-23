import React from 'react';
import CardHome from '../Components/CardHome';
import Tentang from './Tentang';
import Navbar from '../Components/Navbar';
import Layanan from './Layanan';
import Hubungi from './Hubungi';


const Beranda = () => {
  return (
  <>
  <Navbar/>
    <div className='beranda'>
      <h1><span className='highlight'>Teknisi</span> Handal,</h1>
      <h1>Solusi Setiap Masalah</h1>
      <h3 style={{fontWeight:'600'}}>
        Kepuasan pelanggan adalah prioritas utama kami.
        Kami berkomitmen untuk memberikan layanan terbaik
        demi memenuhi kebutuhan dan harapan pelanggan.
      </h3>
      <CardHome/>
    </div>
    <Tentang/>
    <Layanan/>
    <Hubungi/>
    </>
  );
};

export default Beranda;