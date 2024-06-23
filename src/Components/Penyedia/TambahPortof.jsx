import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";
import CobaPopup from './CobaPopup';
import UploadButton from './UploadButton';
import Garis from './Garis';

const TambahPortof = () => {
  const [showPopup, setShowPopup] = useState(false);
  const portofolio = {
    marginTop: '0',
    marginBottom: '100px',
  };

  const titleStyle = {
    color: 'black',
    fontSize: 24,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    wordWrap: 'break-word',
  };

  const subtitleStyle = {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Poppins, sans-serif',
    fontStyle: 'italic',
    fontWeight: 400,
    wordWrap: 'break-word',
  };

  const containerStyle = {
    width: '140px',
    height: '130px',
    padding: '10px 24px',
    background: '#FEFAF6',
    boxShadow: '4px 4px 15px rgba(0, 0, 0, 0.18) inset',
    borderRadius: 8,
    border: '1px solid rgba(0, 0, 0, 0.50)',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    marginTop: '24px',
    marginLeft: '10px'
  };

  // const iconContainerStyle = {
  //   width: 24,
  //   height: 24,
  //   position: 'relative',
  // };

  const plusIconStyle = {
    width: '100%',
    height: '100%',
    display: 'block',
    margin: '0 auto',
    color: '#6E6C6B',
  };
  const keterangan = {
    border: 'none',
    fontSize: 24,
    outline: 'none',
    width: 550,
    
  };
  const buttonStyle = {
    backgroundColor: '#F5DF79',
    width: 390,
    color: 'black',
    fontsize: '16px',
    fontWeight: 500,
    padding: '9px 20px',
    border: '1.5px solid rgba(0, 0, 0, 0.50)',
    borderRadius: '8px',
    cursor: 'pointer',
    boxshadow: '4px 4px 15px 0px rgba(0, 0, 0, 0.18) inset',
    // marginTop: '85px',
    // right: 100,
    margin: '85px 170px',
    // marginRight: '40px',
    // marginLeft: '30px'
  }

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div style={portofolio}>
      <div style={titleStyle}>Portofolio</div>
      <div style={subtitleStyle}>Tambahkan Portofolio</div>
      {/* <input
        type="file"
        name="gambar"
        id="upload"
        style={{ display: "none" }}
      /> */}
      <label onClick={handleOpenPopup} className="upload-button" style={containerStyle} >
        <FiPlus size={50} style={plusIconStyle} />
      </label>

{/* ////////////////// */}
      <CobaPopup show={showPopup} onClose={handleClosePopup}>
        <input type="text" required placeholder='Tambahkan Judul' style={keterangan} />
        <Garis />
        <div style={titleStyle}>Tambahkan Portofolio</div>
        <UploadButton containerStyle={containerStyle} plusIconStyle={plusIconStyle} />
        <button style={buttonStyle}>Tambahkan</button>

      </CobaPopup>

    </div>
  );
};

export default TambahPortof;
