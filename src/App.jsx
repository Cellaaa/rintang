import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {AuthProvider} from './Components/AuthContext';
import "./App.css";
import Beranda from './Page/Beranda';
import Tentang from './Page/Tentang';
import Layanan from './Page/Layanan';
import Hubungi from './Page/Hubungi';
import Loginpage from './Page/Loginpage';
import RegisterPage from './Page/RegisterPage';
import Dashboard_pencari from './Page/Dashboard_pencari';
import Deskripsi from './Page/Deskripsi';
import Dasbor1 from './Page/Penyedia/Dasbor1';
import Dasbor2 from './Page/Penyedia/Dasbor2';
import DasborNo from './Page/Penyedia/DasborNo';
import DasborYes from './Page/Penyedia/DasborYes';
import DasProfil from './Page/Penyedia/DasProfil';
import Login from './Page/Admin/Login_Rintang';
import BerandaAdmin from './Page/Admin/BerandaAdmin'
import Penyediajasa from './Page/Admin/Penyediajasa_admin';
import Verifikasi from './Page/Admin/Verifikasi';
import Menverifikasi from './Page/Admin/Verifikasi_penyedia';
import TambahKota from './Page/Admin//Tambah_kota';
import Tambahprovinsi from './Page/Admin/Tambah_provinsi';
import Tambahlayanan from './Page/Admin/Tambah_layanan';
import Rating from './Page/Rating';
import PrivateRoute from './Components/PrivateRoute';
import TerimaTolak from './Page/Admin/TerimaTolak';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
        <Routes>
          {/* user and admin Page */}
          <Route path='/' element={<Beranda />} />
          <Route path='/tentang' element={<Tentang />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/hubungi" element={<Hubungi />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/regist" element={<RegisterPage />} />
          <Route path="/Dashboard_pencari" element={<PrivateRoute><Dashboard_pencari /></PrivateRoute>} />
          <Route path="/deskripsi" element={<PrivateRoute><Deskripsi /></PrivateRoute>} />
          <Route path="/rating" element={<PrivateRoute><Rating /></PrivateRoute>} />
          <Route path='/formpenyedia' element={<PrivateRoute><Dasbor1 /></PrivateRoute>} />
          <Route path='/formterkirim' element={<PrivateRoute><Dasbor2 /></PrivateRoute>} />
          <Route path='/verifikasigagal' element={<PrivateRoute><DasborNo /></PrivateRoute>} />
          <Route path='/verifikasiberhasil' element={<PrivateRoute><DasborYes /></PrivateRoute>} />
          <Route path='/dashboard' element={<PrivateRoute><DasProfil /></PrivateRoute>}/>
          {/* superAdminPage */}
          <Route path='/admin/login' element={<Login />} />
          <Route path='/admin/beranda' element={<PrivateRoute><BerandaAdmin/></PrivateRoute>}/>
          <Route path='/admin/penyedia-jasa' element={<PrivateRoute><Penyediajasa /></PrivateRoute>} />
          <Route path='/admin/verifikasi' element={<PrivateRoute><Verifikasi /></PrivateRoute>} />
          <Route path='/admin/verifikasi-penyedia' element={<PrivateRoute><Menverifikasi /></PrivateRoute>} />
          <Route path='/admin/tambah-kota' element={<PrivateRoute><TambahKota /></PrivateRoute>} />
          <Route path='/admin/tambah-provinsi' element={<PrivateRoute><Tambahprovinsi /></PrivateRoute>} />
          <Route path='/admin/tambah-layanan' element={<PrivateRoute><Tambahlayanan /></PrivateRoute>} />
          <Route path='/admin/terima-tolak' element={<PrivateRoute><TerimaTolak/></PrivateRoute>}/>
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
