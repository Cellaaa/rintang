import React from 'react'
import Komitmen from '../Assets/Img/Komitmen.png';
import Ketelitian from '../Assets/Img/Ketelitian.png';
import Produk from '../Assets/Img/Produk.png';
import Profesional from '../Assets/Img/Profesional.png';
import Imgtentang from '../Assets/Img/Img_tentang.png';
import CardTentang from '../Components/CardTentang';


const Tentang = () => {
  return (
    <div className="tentang">
      <h1>Mengapa Anda harus memilih layanan jasa teknisi di situs web kami?</h1>
      <div className="highlights">
        <img src={Komitmen} alt="" className='highlight-item' />
        <img src={Ketelitian} alt="" className='highlight-item' />
        <img src={Produk} alt="" className='highlight-item' />
        <img src={Profesional} alt="" className='highlight-item' />
      </div>
      <div className="content">
        <div className="left">
          <img src={Imgtentang} alt="Sample" />
        </div>
        <div className="right">
          <h2>Kami siap melayani 24/7 panggilan darurat</h2>
          <h3 style={{marginRight:'110px'}}>Kami hadir untuk Anda, siap memberikan layanan panggilan darurat setiap saat dan selalu siap merespons dengan cepat dan profesional untuk memenuhi kebutuhan mendesak Anda.</h3>
          <CardTentang/>
        </div>
      </div>
    </div>
  )
}

export default Tentang
