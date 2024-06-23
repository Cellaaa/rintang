import Profile_nav from "./Profile_nav";
import Side_bar from "../../Components/Admin/Side_bar";
import '../../Assets/Admin/css/Verifikasi_penyedia.css'


export default function Verifikasi_penyedia() {
  return (
    <>
<div className="body">
  <div id="wrapper">

    {/* <!-- Sidebar --> */}
   <Side_bar></Side_bar>
    {/* <!-- /#sidebar-wrapper --> */}

    {/* <!-- Page Content --> */}
    <div id="page-content-wrapper">
        <div className="container-fluid">
        <Profile_nav></Profile_nav>
          <div className="name-1">
            <h3>Persetujuan Verifikasi</h3>
          </div>
          <div>-</div>
          <div className="card-j">

            <div className="bio-name-acc">
             <span className="bio-name">Nama</span>
            </div>

            <span className="bio-service-acc">
              <span className="bio-service">Nama Layanan</span>
             </span>
             
             <span className="bio-wa-acc">
              <span className="bio-wa">No. Whatsapp</span>
             </span>

             <div className="bio-city-acc">
              <span className="bio-city">Kota</span>
             </div>

             <span className="bio-town-acc">
              <span className="bio-town">Provinsi</span>
             </span>

             <div className="bio-address-acc">
              <span className="bio-address">Alamat</span>
             </div>

             <div className="bio-certificate-acc">
              <span className="bio-certificate-text">Tambahkan Sertifikat</span>
              <img src="ASET/Setifikat.png" className="bio-certificate" alt="#"/>
             </div>
             <span>
              <button className="yes-btn" type="button">Verifikasi</button>
                <section className="copy legal">
                </section>
             </span>
             <span>
              <button className="no-btn" type="button">Verifikasi</button>
              <section className="copy legal">
              </section>
             </span>
            <div className="row">

            </div>
        </div>
    </div>
    {/* <!-- /#page-content-wrapper --> */}
  </div>

</div>
</div>
    </>
  )
}
