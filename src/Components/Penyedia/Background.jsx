import React from 'react';
import Orang from '../../Assets/Penyedia/img/People.svg';
import BG from '../../Assets/Penyedia/img/BG.svg';

const Background = () => {
  return (
    <>
      <div style={{ width: '100%', height: '176px', borderRadius: 8, overflow: 'hidden' }}>
        <div style={{ width: '980px', height: '100%', background: 'linear-gradient(0deg, rgba(16, 44, 87, 0.20) 0%, rgba(16, 44, 87, 0.20) 100%)', borderRadius: 8 }}>
          <img src={BG} alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{
          width: '128px',
          height: '128px',
          borderRadius: '8px',
          position: 'absolute',
          top: 290,
          left: 340,
          background: 'linear-gradient(to bottom, #102C57, white)',
          padding: '5px',
          boxSizing: 'border-box'
        }} />
        <img style={{ width: '89px', height: '120px', position: 'absolute', top: 298, left: 360, objectFit: 'cover' }} src={Orang} alt="User" />
      </div>
      <div style={{ color: 'black', fontFamily: 'Poppins', wordWrap: 'break-word', display: 'flex', alignItems: 'center', marginBottom: '50px', marginTop: '10px', marginRight: '3opx', marginLeft: '200px' }}>
        <span style={{ fontSize: 24, fontWeight: '600' }}>Ahmad Kasim</span>
        <span style={{ fontSize: 16, fontStyle: 'italic', fontWeight: '400', marginLeft: 8 }}>Batu, Jawa Timur</span>
      </div>
    </>
  );
}

export default Background;
