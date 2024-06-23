import React from 'react'
import User from '../../Assets/Penyedia/img/Male User.svg'
import Notif from '../../Assets/Penyedia/img/Notification.svg'
import '../../../src/index.css';
import '../../Assets/Penyedia/css/Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      {/* <div className="main-content"> */}
        <div className="nav">
          <div className="title">Beranda Penyedia Jasa</div>
          <div className="actions">
              <Link to='/notifikasi'>
                <img className="notif-icon" src={Notif} alt="Notification"/>
              </Link>
            <div className="user-info">
              <img className="user-icon" src={User} alt="User"/>
              <div className="user-name">Ahmad Kasim</div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  )
}

export default Navbar
