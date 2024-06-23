import React from 'react';
import '../../Assets/Admin/css/Penyedia_jasa.css'
import Profile_nav from './Profile_nav'
import Side_bar from '../../Components/Admin/Side_bar'
import { Link } from 'react-router-dom'

export default function Penyedia_jasa() {
  return (
    <>
      <div className='body'>
        <div id="wrapper">

          {/* <!-- Sidebar --> */}
          <Side_bar></Side_bar>

          {/* <!-- Page Content --> */}
          <div id="page-content-wrapper">
            <div className="container-fluid">
              <Profile_nav></Profile_nav>
              <div className="nama-jasa">
                <h3>Jumlah penyedia Jasa</h3>
              </div>
              <table className='tabel'>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Layanan</th>
                  <th>Kota</th>
                  <th>Provinsi</th>
                  <th>Aksi</th>
                </tr>
                <tr >
                  <td className='nomor'>1</td>
                  <td>Sigit Rendang</td>
                  <td>Instalasi saluran Air</td>
                  <td>Bandung</td>
                  <td>Jawa barat</td>
                  <td className='button'>
                    {/* <button className='detail-button'>Detile</button> */}
                    <Link to="/deskripsi" className="detail-button">Detile</Link>
                  </td>
                </tr>
              </table>

              {/* <div className="penyediatest">
                    <span className="Notest">
                      <h2>0</h2>
                    </span>
                    <div className="classt">
                    </div>
                    <span className="Nametest">
                      <h2>test-nama</h2>
                    </span>
                    <span className="emailtest">
                      <h3>test@gmail.com</h3>
                    </span>
                    <span className="servicetest">
                      <h2>service test</h2>
                    </span>
                    <span className="citytest">
                      <h2>bumi</h2>
                    </span>
                    <span className="towntest">
                      <h2>indonesia</h2>
                    </span>
                    <a href="test" className="Detail-btn">
                      <span className="Detail-btn-text">Detail</span>
                    </a>
                  </div> */}
              {/* <div className="row"> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
