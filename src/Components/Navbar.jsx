import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Img/Logoblack.png';
import IcMasuk from '../Assets/Img/Ic-Masuk.png'; 
import '../Assets/css/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <img src={Logo} alt="Logo" className='nav-logo' />
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" className='nav-link'>Beranda</Link>
        <Link to="/tentang" className='nav-link'>Tentang</Link>
        <Link to="/layanan" className='nav-link'>Layanan</Link>
        <Link to="/hubungi" className='nav-link'>Hubungi Kami</Link>
      </ul>
      <Link to="/login" className='nav-login'>
        <img src={IcMasuk} alt="Icon Masuk" className='icon-masuk' />
        Masuk
      </Link>
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
};

export default Navbar;
