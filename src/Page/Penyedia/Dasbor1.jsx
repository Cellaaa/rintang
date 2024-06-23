import React from 'react';
import Sidebar from '../../Components/Penyedia/Sidebar';
import IsiData from '../../Components/Penyedia/IsiData';
import Navbar from '../../Components/Penyedia/Navbar';
import '../../Assets/Penyedia/css/Dasbord.css';


const Dasbor1 = () => {
  return (
    <div className='Utama'>
    <div>
      <Sidebar />
    </div>
    <div className='Main-Contain'>
        <Navbar />
        <IsiData />
      </div>
    </div>
  );
}

export default Dasbor1;
