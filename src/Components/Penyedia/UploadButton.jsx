import React from 'react';
import { FiPlus } from "react-icons/fi";

const UploadButton = ({onClick}) => {
  const containerStyle = {
    width: '140px',
    height: '140px',
    padding: '10px 24px',
    background: '#FEFAF6',
    boxShadow: '4px 4px 15px rgba(0, 0, 0, 0.18) inset',
    borderRadius: 8,
    border: '1px solid rgba(0, 0, 0, 0.50)',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    marginBottom: '20px',
    marginTop: '10px'
  };

  const plusIconStyle = {
    width: '100%',
    height: '100%',
    display: 'block',
    margin: '0 auto',
    color: '#6E6C6B',
  };

  return (
    <>
      <input
        type="file"
        name="gambar"
        id="upload"
        style={{ display: "none" }}
      />
      <label htmlFor="upload" style={containerStyle} onClick={onClick}>
        <FiPlus size={50} style={plusIconStyle} />
      </label>
    </>
  );
};

export default UploadButton;
