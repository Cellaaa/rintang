import React from 'react'
import CardPertanyaan from '../Components/CardPertanyaan'
import CardLayanan from '../Components/CardLayanan'
import CardTestimoni from '../Components/CardTestimoni'
import CardPenyedia from '../Components/CardPenyedia'


const Layanan = () => {
  return (
    <div className='layanan'>
      <h1 style={{fontSize:'25px', paddingBottom:'20px'}}>Cari penyedia layanan yang dapat diandalkan untuk semua kebutuhan Anda.</h1>
     <CardLayanan/>
      <h1 style={{fontSize:'25px', paddingTop:'20px', paddingBottom:'20px'}}>Pertanyaan yang Sering Ditanyakan</h1>
      <CardPertanyaan />
      <h1 style={{fontSize:'25px', paddingTop:'20px', paddingBottom:'20px'}}>Testimoni Dari Pelanggan Rintang Service</h1>
      <CardTestimoni/>

      <CardPenyedia/>
      
    </div>
  )
}

export default Layanan
