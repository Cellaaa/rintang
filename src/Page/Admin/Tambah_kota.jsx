import { useEffect,useState } from 'react';
import '../../Assets/Admin/css/Tambah-kota.css';
import Keluar from '../../Assets/Admin/Img/Open Door.png';
import Side_bar from '../../Components/Admin/Side_bar';
import Profile_nav from './Profile_nav';
import { FaCirclePlus } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlinePlus } from "react-icons/hi";
import axios from 'axios';


export default function Tambah_kota() {
  const [kota,setKota] = useState([]);

  useEffect(()=>{
    getKota();
  },[]);
  const getKota = async()=>{
    try {
      const response = await axios.get('http://localhost:4000/kota');
      console.log(response.data); // Log data received from the API
      setKota(response.data);
    } catch (error) {
      console.error('Error fetching cities:', error);
      // Optionally, handle error state or display error message
    }
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
              <h2>Jumlah Lokasi</h2>
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
                    <h2 className="header">Tambahkan Lokasi</h2>
                  </header>
                  <div>
                    <hr className="Line2" />
                  </div>
                  <section>
                    <form action="">
                      <div className="input-container-city">
                      <HiOutlinePlus className="icon-tambah-lokasi" alt="#" />
                        <input id="city-pop" name="fname" type="place" placeholder="Masukan Lokasi Baru" />
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
                    <span className="text-tambah">Tambah Lokasi</span>
                  </button>
                </section>

                <table className="kota">
                    <thead>
                      <tr>
                        <th className="narrow-column">No</th>
                        <th>Kota</th>
                        <th className="jarak-action">Actions</th>                   
                      </tr>
                    </thead>
                    <tbody>
                          <tr>
                            <td className="narrow-column">1</td>
                            <td>Gorontalo</td>
                            <td className="jarak-action">
                              <button className="edit" onClick={() => handleEdit(kota.id)}>Edit</button>
                              <button className="delete" onClick={() => handleDelete(kota.id)}>Delete</button>
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

