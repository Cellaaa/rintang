import { useEffect,useState } from 'react';
import '../../Assets/Admin/css/Tambah_provinsi.css';
import '../../Assets/Admin/css/Tambah-kota.css';
import Profile_nav from './Profile_nav';
import Side_bar from '../../Components/Admin/Side_bar';
import { FaCirclePlus } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlinePlus } from "react-icons/hi";
import Keluar from '../../Assets/Admin/Img/Open Door.png';
import axios from 'axios';

export default function Tambah_provinsi() {
  const [provinsi,setProvinsi] = useState([]);

  useEffect(()=>{
    getProvinsi();
  },[]);

  const getProvinsi = async () => {
    const response = await axios.get('http://localhost:4000/provinsi')
    setProvinsi(response.data)
  }
  
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
              <h2>Jumlah Provinsi</h2>
            </div>
            
            <div className="lokasi">
              <div className="bio-j">
                <form action="">
                  <div className="src-container-city">
                    <FaLocationDot className="icon-lokasi" alt="#" />
                    <input id="city" name="fname" type="text" placeholder="Cari Lokasi" />
                  </div>
                </form>

                <dialog id="DialogBox">
                  <header>
                    <h2 className="header">Tambahkan Provinsi</h2>
                  </header>
                  <div>
                    <hr className="Line2" />
                  </div>
                  <section>
                    <form action="">
                      <div className="input-container-city">
                      <HiOutlinePlus className="icon-tambah-lokasi" alt="#" />
                        <input id="city-pop" name="fname" type="place" placeholder="Masukan Provinsi Baru" />
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
                    <span className="text-tambah">Tambah Provinsi</span>
                  </button>
                </section>
                <table className="kota">
                  <thead>
                    <tr>
                      <th className="narrow-column">No</th>
                      <th>Provinsi</th>
                      <th className="jarak-action">Actions</th>                   
                    </tr>
                  </thead>
                  <tbody>
                      <tr>
                      <td className="narrow-column">1</td>
                      <td>Jambi</td>
                      <td className="jarak-action">
                      <button className="edit" onClick={() => handleEdit(1)}>Edit</button> {/* Tombol Edit */}
                      <button className="delete" onClick={() => handleDelete(1)}>Delete</button> {/* Tombol Delete */}
                      </td>
                    </tr> 
                  </tbody>
                </table>
                {/* <div className="Nn-holder">
                  <h3 className="No-city">No</h3>
                  <h3 className="Name-city">Provinsi</h3>
                </div>
                <div className="Town-bar-test">
                  <span className="No-ttest">
                    <h2>0</h2>
                  </span>
                  <span className="Name-ttest">
                    <h2>Bumi</h2>
                  </span>
                </div> */}
              </div>
              <div className="row"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}