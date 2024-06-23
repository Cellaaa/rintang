import React, { useState } from 'react'
import '../../Assets/Penyedia/css/Dasbord.css';
import Sidebar from '../../Components/Penyedia/Sidebar';
import Navbar from '../../Components/Penyedia/Navbar';
import Garis from '../../Components/Penyedia/Garis';
import TambahPortof from '../../Components/Penyedia/TambahPortof'; // Ensure this path is correct
import TambahDeskrip from '../../Components/Penyedia/TambahDeskrip'; // Ensure this path is correct
import Background from '../../Components/Penyedia/Background';
import CobaPopup from '../../Components/Penyedia/CobaPopup'
const DasProfil = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <div className='Utama'>
                <div>
                    <Sidebar />
                </div>
                <div className='Main-Contain'>
                    <Navbar />
                    <Garis />
                    <Background />
                    <TambahDeskrip />

                    <TambahPortof onClick={handleOpenPopup} />
                </div>
            </div>
            <CobaPopup show={showPopup} onClick={handleClosePopup}>
                <TambahPortof />
            </CobaPopup>
        </>
    )
}

export default DasProfil