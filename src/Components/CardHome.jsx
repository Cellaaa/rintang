import React from 'react';
import { Link } from 'react-router-dom';
import Icona from '../Assets/Img/Ic-search.png';
import Iconb from '../Assets/Img/Ic-location.png';
import '../Assets/css/Card.css';

const CardHome = () => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-section">
                    <label htmlFor="jasa" className="card-label">
                        <img src={Icona} alt="Cari Jasa" className='card-icon' />
                        <span>Jasa</span>
                    </label>
                    <select id="jasa" className="card-select">
                        <option value="" disabled selected hidden>Cari jasa</option>
                        <option value="ac">Service AC</option>
                        <option value="mesin-cuci">Service Mesin Cuci</option>
                        <option value="listrik">Service Listrik</option>
                        <option value="tv">Service TV</option>
                        <option value="radio">Service Radio</option>
                        <option value="saluran-air">Service Saluran Air</option>
                        <option value="kulkas">Service Kulkas</option>
                    </select>
                </div>
                <div className="card-section">
                    <label htmlFor="lokasi" className="card-label">
                        <img src={Iconb} alt="Lokasi" className='card-icon' />
                        <span>Lokasi</span>
                    </label>
                    <select id="lokasi" className="card-select">
                        <option value="" disabled selected hidden>Tentukan lokasi</option>
                        <option value="jambi">Jambi</option>
                        <option value="bandung">Bandung</option>
                        <option value="surabaya">Surabaya</option>
                        <option value="semarang">Semarang</option>
                        <option value="pekanbaru">Pekan Baru</option>
                        <option value="tanjung-pinang">Tanjung Pinang</option>
                        <option value="jakarta">Jakarta</option>
                    </select>
                </div>
                <div className="card-section-button">
                    <Link to='/login'>
                        <button className="card-button">Tentukan Jasa</button></Link>
                </div>
            </div>
        </div>
    );
}

export default CardHome;
