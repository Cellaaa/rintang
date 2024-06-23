import React from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/Penyedia/css/IsiData.css';
import { FiPlus} from "react-icons/fi";

const IsiData = () => {
  return (
    <div className="container-verif">
        <div className="title">Verifikasi Data</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-data">
                <span className="detail-form">Nama</span>
                <input style={{width: '920px', height: '100%', paddingLeft: 24, paddingRight: 24, paddingTop: 10, paddingBottom: 10, background: '#FEFAF6',borderRadius: 8, border: '1px rgba(0, 0, 0, 0.50) solid'}} />
              </div>
              <div className="input-row">
                <div className="input-data">
                  <label for="layanan">Nama Layanan</label>
                  <select id="layanan" name="layanan">
                    <option value="ac">Service AC</option>
                    <option value="mesin-cuci">Service Mesin Cuci</option>
                    <option value="listrik">Service Listrik</option>
                    <option value="tv">Service TV</option>
                    <option value="radio">Service Radio</option>
                    <option value="saluran-air">Service Saluran Air</option>
                    <option value="kulkas">Service Kulkas</option>
                    <option value="pilih" disabled selected hidden>Pilih Layanan</option>
                  </select>
                </div>

                <div className="input-data">
                  <span className="detail-form">No. Whatsapp</span>
                  {/* <input className='colom' type="text" placeholder="" required /> */}
                  <input  style={{width: '100%', height: 'auto', paddingLeft: 24, paddingRight: 24, paddingTop: 10, paddingBottom: 10, background: '#FEFAF6', borderRadius: 8, border: '1px rgba(0, 0, 0, 0.50) solid'}} />
                </div>
              </div>
              <div className="input-row">
                <div className="input-data">
                  <label for="provinsi">Provinsi</label>
                  <select id="provinsi" name="provinsi">
                    <option value="jambi">Jambi</option>
                    <option value="jakarta">Jakarta</option>
                    <option value="jawa-barat">Jawa Barat</option>
                    <option value="jawa-timur">Jawa Timur</option>
                    <option value="jawa-tengah">Jawa Tengah</option>
                    <option value="riau">Riau</option>
                    <option value="sumatra-barat">Sumatra Barat</option>
                    <option value="pilih" disabled selected hidden>Pilih Provinsi</option>
                  </select>
                </div>
                <div className="input-data">
                  <label for="kota">Kota</label>
                  <select id="kota" name="kota">
                    <option value="jambi">Jambi</option>
                    <option value="bandung">Bandung</option>
                    <option value="surabaya">Surabaya</option>
                    <option value="semarang">Semarang</option>
                    <option value="pekanbaru">Pekan Baru</option>
                    <option value="tanjung-pinang">Tanjung Pinang</option>
                    <option value="jakarta">Jakarta</option>
                    <option value="pilih" disabled selected hidden>Pilih Kota</option>
                  </select>
                </div>
              </div>
              <div className="input-data">
                <span className="detail-form">Alamat</span>
                <textarea style={{width: '920px', height: '100%', paddingLeft: 14, paddingRight: 14, paddingTop: 10, paddingBottom: 10, background: '#FEFAF6'}}name="alamat" id="alamat" cols="30" rows="5" placeholder="Masukkan Alamat Lengkap Anda"></textarea>
              </div>
              <div className="input-data">
                <span className="detail-form">Tambahkan Sertifikat</span>
                <input 
                type="file" 
                name="gambar" 
                id="upload" 
                style={{ display: 'none' }} 
                 />
                <label for="upload" className="upload-button">
                <FiPlus size={50} className="plus" />
                </label>
              </div>
              <div>
                <Link to="/formterkirim">
                <button className="btn-submit">Verifikasi Data</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
  )
}

export default IsiData