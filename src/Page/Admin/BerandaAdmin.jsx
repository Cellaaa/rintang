import React from 'react';
import '../../Assets/Admin/css/Beranda.css';
import Profile_nav from './Profile_nav';
import Side_bar from '../../Components/Admin/Side_bar';
import SAC from '../../Assets/Admin/Img/S_AC.png';
import SWM from '../../Assets/Admin/Img/S_WM.png';
import SE from '../../Assets/Admin/Img/S_E.png';
import STV from '../../Assets/Admin/Img/S_TV.png';
import SR from '../../Assets/Admin/Img/S_R.png';
import SKK from '../../Assets/Admin/Img/S_KK.png';
import SPP from '../../Assets/Admin/Img/S_PP.png';

function Beranda() {
  return (
    <div className='body'>
      <div id="wrapper">
        <Side_bar />
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <Profile_nav />
            <div className="name-beranda">
              <h3>List Jumlah penyedia Jasa</h3>
            </div>
            <div className="beranda-admin">
              <div className="service-ac">
                <div className="class-s">
                  <img src={SAC} className="logo-picture" alt="AC Service" />
                </div>
                <div className="people">
                  <h2>Orang</h2>
                </div>
                <span className="num-people">
                  <h1>0</h1>
                </span>
              </div>

              <div className="service-wm">
                <div className="class-s">
                  <img src={SWM} className="logo-picture" alt="WM Service" />
                </div>
                <div className="people">
                  <h2>Orang</h2>
                </div>
                <span className="num-people">
                  <h1>0</h1>
                </span>
              </div>

              <div className="service-e">
                <div className="class-s">
                  <img src={SE} className="logo-picture" alt="Electrical Service" />
                </div>
                <div className="people">
                  <h2>Orang</h2>
                </div>
                <span className="num-people">
                  <h1>0</h1>
                </span>
              </div>

              <div className="service-tv">
                <div className="class-s">
                  <img src={STV} className="logo-picture" alt="TV Service" />
                </div>
                <div className="people">
                  <h2>Orang</h2>
                </div>
                <span className="num-people">
                  <h1>0</h1>
                </span>
              </div>

              <div className="service-r">
                <div className="class-s">
                  <img src={SR} className="logo-picture" alt="Refrigerator Service" />
                </div>
                <div className="people">
                  <h2>Orang</h2>
                </div>
                <span className="num-people">
                  <h1>0</h1>
                </span>
              </div>

              <div className="service-kk">
                <div className="class-s">
                  <img src={SKK} className="logo-picture" alt="Kitchen Kit Service" />
                </div>
                <div className="people">
                  <h2>Orang</h2>
                </div>
                <span className="num-people">
                  <h1>0</h1>
                </span>
              </div>

              <div className="service-pp">
                <div className="class-s">
                  <img src={SPP} className="logo-picture" alt="Plumbing Service" />
                </div>
                <div className="people">
                  <h2>Orang</h2>
                </div>
                <span className="num-people">
                  <h1>0</h1>
                </span>
              </div>
            </div>
            <div className="row"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beranda;
