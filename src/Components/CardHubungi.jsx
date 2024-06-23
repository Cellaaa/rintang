import React from 'react';
import whatsappIcon from '../Assets/Img/Ic-whatsap.png';
import { FaWhatsapp } from "react-icons/fa";

const CardHubungi = () => {
  return (
    <div className="card-hubungi">
      <div className="contact-info">
        <h2>Informasi Kontak</h2>
        <p>Jika ada yang ingin ditanyakan, hubungi saja</p>
        <div className="contact-details">
          <p><i className="fa fa-whatsapp"></i> +62 838-5001-1300</p>
          <p><i className="fa fa-phone"></i> +62 838-5001-1300</p>
          <p><i className="fa fa-envelope"></i> Rintangservices@gmail.com</p>
        </div>
      </div>
      <div className="contact-form">
        <div className="form-group">
          <label>Nama Lengkap</label>
          <input type="text" name="nama" />
        </div>
        <div className="form-group">
          <label>Nomor Telepon</label>
          <input type="text" name="telepon" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        <div className="form-group">
          <label>Pesan</label>
          <textarea name="pesan"></textarea>
        </div>
        <button className="send-message">Kirim Pesan</button>
        <div className="or-text">Atau</div>
        <button className="whatsapp-button">
           <FaWhatsapp  alt="WhatsApp Icon" className="whatsapp-icon" />
        </button>
      </div>
    </div>
  );
};

export default CardHubungi;