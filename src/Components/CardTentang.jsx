import React from 'react'
import IcCeklis from '../Assets/Img/Ic-ceklis.png'
import '../Assets/css/Card.css'

const CardTentang = () => {
  return (
    <div className="card-tentang">
      <div className="item-tentang">
        <div className="icon-tentang">
          <img src={IcCeklis} alt="Ic-ceklis" />
        </div>
        <p>Melalui website ini, pelanggan dapat mengakses informasi dan layanan kapan saja, tanpa terbatas oleh jam kerja tradisional.</p>
      </div>
      <div className="item-tentang">
        <div className="icon-tentang">
          <img src={IcCeklis} alt="Ic-ceklis" />
        </div>
        <p >Pelanggan dapat dengan mudah menjadwalkan perbaikan atau layanan, memilih waktu yang sesuai dengan jadwal mereka sendiri.</p>
      </div>
    </div>
  )
}

export default CardTentang
