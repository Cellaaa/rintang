import React from 'react';
import '../Assets/css/Card.css';
import { Link } from 'react-router-dom';
import Penyedia from '../Assets/Img/Penyedia.png';

const CardPenyedia = () => {
  return (
    <>
    <div className="card-penyedia">
    <div className="text-content">
      <h2>Ingin Menjadi <span className="highlight">Penyedia Jasa</span>?</h2>
      <p>
        Kami akan menghubungkan Anda dengan pelanggan
        sehingga Anda dapat meningkatkan kinerja bisnis
        Anda.
      </p>
      <Link to='/regist'>
      <button className="btn-daftar">Daftar Sekarang</button></Link>
    </div>
  </div>
  <div className='bg-penyedia'/>
  <img src={Penyedia} alt="Penyedia Jasa" className="penyedia-image" />
  
  </>
  );
};

export default CardPenyedia;
