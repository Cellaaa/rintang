import { Link } from 'react-router-dom'
import '../../Assets/Admin/css/Verifikasi.css'
import Profile_nav from './Profile_nav'
import Side_bar from '../../Components/Admin/Side_bar'
import '../../Assets/Admin/css/Penyedia_jasa.css'

function Verifikasi() {
  return (
    <>
      <div className="body">
        <div id="wrapper">

          {/* <!-- Sidebar --> */}
          <Side_bar></Side_bar>
          {/* <!-- Page Content --> */}
          <div id="page-content-wrapper">
            <div className="container-fluid">
              <Profile_nav></Profile_nav>
              <div className="persetujuan">
                <h3>Persetujuan Verifikasi</h3>
              </div>
              <table className='tabel'>
                <tr>
                  <th className='nomor'>No</th>
                  <th>Nama</th>
                  <th>Layanan</th>
                  <th>Kota</th>
                  <th>Provinsi</th>
                  <th>Aksi</th>
                </tr>
                <tr >
                  <td className='nomor'>1</td>
                  <td>Ahmad Kasim</td>
                  <td>Service AC</td>
                  <td>Batu</td>
                  <td>Jawa Timur</td>
                  <td className='button'>
                    <Link to="/admin/terima-tolak" className="detail-button">Cek</Link></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
   </>
  );
}

export default Verifikasi
