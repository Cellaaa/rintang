import { useEffect } from 'react';
import '../../Assets/Admin/css/Tambah_layanan.css';
import '../../Assets/Admin/css/Tambah-kota.css';
import Side_bar from '../../Components/Admin/Side_bar';
import Profile_nav from './Profile_nav';
import { FaCirclePlus } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlinePlus } from "react-icons/hi";

import Keluar from '../../Assets/Admin/Img/Open Door.png';


export default function Tambah_layanan() {
  useEffect(() => {
    const dialogBoxId = document.getElementById("DialogBox");

    function showDialog() {
      dialogBoxId.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          e.preventDefault();
        }
      });
      dialogBoxId.showModal();
    }

    function closeDialog() {
      dialogBoxId.close();
    }

    document.getElementById("openDialogBox").addEventListener("click", showDialog);
    document.getElementById("closeDialogFooter").addEventListener("click", closeDialog);

    return () => {
      document.getElementById("openDialogBox").removeEventListener("click", showDialog);
      document.getElementById("closeDialogFooter").removeEventListener("click", closeDialog);
    };
  }, []);

  return (
    <div className="body">
      <div id="wrapper">
        {/* Sidebar */}
        <Side_bar></Side_bar>
        {/* Page Content */}
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <Profile_nav></Profile_nav>
            <div className="name-lokasi">
              <h2>Jumlah Layanan</h2>
            </div>
            <div className="lokasi">
              <div className="bio-j">
                <form action="">
                  <div className="src-container-city">
                    <FaLocationDot className="icon-lokasi" alt="#" />
                    <input id="city" name="fname" type="text" placeholder="Cari Layanan" />
                  </div>
                </form>

                <dialog id="DialogBox">
                  <header>
                    <h2 className="header">Tambahkan Layanan</h2>
                  </header>
                  <div>
                    <hr className="Line2" />
                  </div>
                  <section>
                    <form action="">
                      <div className="input-container-city">
                      <HiOutlinePlus className="icon-tambah-layanan" alt="#" />
                        <input id="city-pop" name="fname" type="service" placeholder="Masukan Layanan Baru" />
                      </div>
                    </form>
                  </section>
                  <footer>
                    <button id="closeDialogFooter">
                      <img src={Keluar} className="popup-img-out" alt="#" />
                      <h3 className="Popup-txt-out">Kembali</h3>
                    </button>
                    <button id="AddButton">Tambahkan</button>
                  </footer>
                </dialog>
                <section>
                  <button className="button-tambah" type="button" id="openDialogBox">
                    <FaCirclePlus className="icon-tambah" alt="#" />
                    <span className="text-tambah">Tambah Layanan</span>
                  </button>
                </section>
                <table className="kota">
                  <thead>
                    <tr>
                      <th className="narrow-column">No</th>
                      <th>Layanan</th>
                      <th className="jarak-action">Actions</th>                   
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="narrow-column">1</td>
                      <td>Service AC</td>
                      <td className="jarak-action">
                      <button className="edit" onClick={() => handleEdit(1)}>Edit</button> {/* Tombol Edit */}
                      <button className="delete" onClick={() => handleDelete(1)}>Delete</button> {/* Tombol Delete */}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
