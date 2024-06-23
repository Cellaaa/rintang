import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tukang1 from '../Assets/Img/Tukang1.png'; // Pastikan path gambar benar
import CoverImage from '../Assets/Img/CoverImage.png'; // Pastikan path gambar benar

const CardRating = () => {
  const [speedRating, setSpeedRating] = useState(0);
  const [accuracyRating, setAccuracyRating] = useState(0);
  const navigate = useNavigate();

  const handleSpeedRating = (rating) => {
    setSpeedRating(rating);
  };

  const handleAccuracyRating = (rating) => {
    setAccuracyRating(rating);
  };

  const handleSubmit = () => {
    alert('Rating berhasil dikirim!');
    navigate('/deskripsi'); // Redirect back to the description page
  };

  return (
    <div className="container mx-auto p-6 font-sans">
      <div className="relative">
        <img src={CoverImage} alt="Cover" className="w-full h-48 object-cover rounded-t-lg" />
      </div>

      <div className="relative flex items-center p-4">
        <img src={Tukang1} alt="Ahmad Kasim" className="rounded-full w-24 h-24 border-4 border-white -mt-12" />
        <div className="ml-4 text-black">
          <h2 className="text-2xl font-bold">Ahmad Kasim</h2>
          <p className="text-lg">Batu, Jawa Timur</p>
          <p className="flex items-center mt-1 text-xl">
            <span className="mr-2">★★★★★</span>
            <span className="text-yellow-400">5.0</span>
          </p>
        </div>
        <button
          className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
          onClick={() => window.open('https://wa.me/your_number_here', '_blank')}
        >
          WhatsApp
        </button>
      </div>

      <div className="mt-10 p-6 bg-gray-100 shadow-md rounded-lg">
        <h3 className="text-center text-2xl font-bold mb-6">Bagaimana kinerja Ahmad Kasim?</h3>

        <div className="flex justify-between gap-6">
          <div className="w-1/2">
            <p className="text-center text-lg font-semibold">Kecepatan bekerja</p>
            <div className="flex justify-center gap-3 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="flex flex-col items-center">
                  <span
                    onClick={() => handleSpeedRating(star)}
                    className={`cursor-pointer text-3xl ${star <= speedRating ? 'text-yellow-400' : 'text-gray-400'}`}
                  >
                    ★
                  </span>
                  <p className="text-sm mt-1">
                    {star === 1 && 'Sangat buruk'}
                    {star === 2 && 'Buruk'}
                    {star === 3 && 'Cukup baik'}
                    {star === 4 && 'Baik'}
                    {star === 5 && 'Sangat baik'}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-1/2">
            <p className="text-center text-lg font-semibold">Ketelitian</p>
            <div className="flex justify-center gap-3 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="flex flex-col items-center">
                  <span
                    onClick={() => handleAccuracyRating(star)}
                    className={`cursor-pointer text-3xl ${star <= accuracyRating ? 'text-yellow-400' : 'text-gray-400'}`}
                  >
                    ★
                  </span>
                  <p className="text-sm mt-1">
                    {star === 1 && 'Sangat buruk'}
                    {star === 2 && 'Buruk'}
                    {star === 3 && 'Cukup baik'}
                    {star === 4 && 'Baik'}
                    {star === 5 && 'Sangat baik'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500"
            onClick={handleSubmit}
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardRating;
