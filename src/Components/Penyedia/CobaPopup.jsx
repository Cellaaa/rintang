import React from 'react';
import { FaRegWindowClose } from 'react-icons/fa'; // Ensure this package is installed
import '../../Assets/Penyedia/css/Popup.css'; // Correct path to Popup.css
import Close from '../../Assets/Penyedia/img/Open Door.svg'; 

const CobaPopup = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
        <img src={Close} alt="Close Icon" className='close-icon'/>
        <span className='close-text'>Kembali</span>
          {/* <FaRegWindowClose /> */}
        </button>
        {children}
      </div>
    </div>
  );
};

export default CobaPopup;
