import { Link } from 'react-router-dom';
import  '../../Assets/Admin/css/Side_bar.css'
import Logo from '../../Assets/Penyedia/img/logo_putih.svg'
const Side_bar = () => {
  return (
    <>
      <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
              <li className="sidebar-brand">
                <img src={Logo} className="Logo" alt="#"/>
              </li>
              <li>
                  <Link to="/admin/beranda">Beranda</Link>
              </li>
              <li>
                  <Link to="/admin/penyedia-jasa">Penyedia Jasa</Link>
              </li>
              <li>
                  <Link to="/admin/verifikasi">Verifikasi Penyedia Jasa</Link>
              </li>
              <li>
              <Link to="/admin/tambah-kota">Tambah Kota</Link>
              </li>
              <li>
                  <Link to="/admin/tambah-Provinsi">Tambah Provinsi</Link>
              </li>
              <li>
                  <Link to="/admin/tambah-Layanan">Tambah Layanan</Link>
              </li>
          </ul>
          <Link to="/admin/login" className="out-btn">
            <botton className="out-btn-text">Keluar</botton>
          </Link>
      </div>
    </>
  )
}

export default Side_bar
