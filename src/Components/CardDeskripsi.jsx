import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Tukang1 from '../Assets/Img/Tukang1.png';
import CoverImage from '../Assets/Img/CoverImage.png';

const CardDeskripsi = () => {
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const handleRatingClick = () => {
    navigate('/rating'); // Navigasi ke /rating
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/'); // Buka WhatsApp
  };

  const handleBackClick = () => {
    navigate('/Dashboard_pencari'); // Navigasi ke /Dashboard_pencari
  };

  return (
    <div className="container mx-auto p-6 font-sans">
      {/* Bagian gambar sampul */}
      <div className="relative">
        <img src={CoverImage} alt="Cover" className="w-full h-48 object-cover rounded-t-lg" />
      </div>

      {/* Bagian informasi utama */}
      <div className="max-w-7xl mx-auto p-6 font-sans">
        <div className="flex flex-col md:flex-row items-center mb-6">
          <img src={Tukang1} alt="Profile" className="w-24 h-24 rounded-full mr-6" />
          <div className="flex-1 md:flex md:items-center md:justify-between w-full">
            <div>
              <h1 className="text-2xl font-bold">Ahmad Kasim</h1>
              <p className="text-gray-600">Batu, Jawa Timur</p>
              <div className="flex items-center mt-2 space-x-4">
                <span className="text-xl mr-2">5.0</span>
                <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <div className="flex mt-4 md:mt-0 space-x-4">
              <button
                className="bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-500"
                onClick={handleRatingClick}
              >
                Beri rating
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={handleWhatsAppClick}
              >
                WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Bagian deskripsi */}
        <div className="mb-6">
          <p>
            Ahmad Kasim, seorang teknisi AC berpengalaman dengan lebih dari lima tahun pengalaman dalam industri, yang memiliki gelar Sarjana Teknik Mesin dari Universitas Indonesia, telah berhasil memperbaiki keahlian yang mendalam dalam pemasangan, perbaikan, dan pemeliharaan unit AC split system dan central, serta...
          </p>
        </div>

        {/* Bagian portfolio */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Service AC Bu Tivi', 'Service AC Pak Herman', 'Service AC Pak Yoyo', 'Service AC Bu Nina'].map((service, index) => (
              <div className="text-center" key={index}>
                <img
                  src={Tukang1}
                  alt={service}
                  className="w-full h-32 object-cover mb-2"
                />
                <p>{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tombol kembali */}
        <button
          className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500"
          onClick={handleBackClick} // Navigasi ke /Dashboard_pencari
        >
          Kembali
        </button>
      </div>
    </div>
  );
};

export default CardDeskripsi;
