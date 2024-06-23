import React from 'react';
import '../Assets/css/SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <select className="dropdown">
          <option value="ac">Service AC</option>
          <option value="mesin-cuci">Service Mesin Cuci</option>
          <option value="listrik">Service Listrik</option>
          <option value="tv">Service TV</option>
          <option value="radio">Service Radio</option>
          <option value="saluran-air">Service Saluran Air</option>
          <option value="kulkas">Service Kulkas</option>
          <option value="pilih" disabled selected hidden>Pilih Layanan</option>
        </select>
        <select className="dropdown">
          <option value="jambi">Jambi</option>
          <option value="bandung">Bandung</option>
          <option value="surabaya">Surabaya</option>
          <option value="semarang">Semarang</option>
          <option value="pekanbaru">Pekan Baru</option>
          <option value="tanjung-pinang">Tanjung Pinang</option>
          <option value="jakarta">Jakarta</option>
          <option value="pilih" disabled selected hidden>Pilih Kota</option>
        </select>
        <button className="search-button">Cari</button>
      </div>
    </div>
  );
};

export default SearchBar;
