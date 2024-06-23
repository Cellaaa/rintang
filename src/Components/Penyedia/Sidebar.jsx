import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Penyedia/img/logo_putih.svg';
import logo2 from '../../Assets/Penyedia/img/Home.svg';
import logo3 from '../../Assets/Penyedia/img/Info.svg';
import logo4 from '../../Assets/Penyedia/img/User.svg';
import logo5 from '../../Assets/Penyedia/img/Open Door.svg';
import '../../Assets/Penyedia/css/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="header">
        <div className="list-item">
          <Link to='/beranda'>
            <img src={logo} alt="logo" className="icon" />
          </Link>
        </div>
      </div>
      <div className="main">
        <div className="list-item">
          <Link to='/dashboard'>
            <img src={logo2} alt="" className="icon" />
            <span className="description">Beranda</span>
          </Link>
        </div>
        <div className="list-item">
          <Link to='/tentang'>
            <img src={logo3} alt="" className="icon" />
            <span className="description">Tentang</span>
          </Link>
        </div>
        <div className="list-item">
          <Link to='/profil'>
            <img src={logo4} alt="" className="icon" />
            <span className="description">Profil</span>
          </Link>
        </div>
      </div>
      <div className="logout">
        <div className="list-item">
          <Link to='/login'>
            <img src={logo5} alt="" className="icon" />
            <span className="description">Keluar</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
