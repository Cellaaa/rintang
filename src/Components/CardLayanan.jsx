import React from 'react'
import '../Assets/css/Card.css'
import AC from '../Assets/Img/AC.png'
import Air from '../Assets/Img/Air.png'
import Kulkas from '../Assets/Img/Kulkas.png'
import Listrik from '../Assets/Img/Listrik.png'
import MesinCuci from '../Assets/Img/MesinCuci.png'
import Televisi from '../Assets/Img/Televisi.png'
import Radio from '../Assets/Img/Radio.png'


const services = [
  { name: 'AC', img: AC },
  { name: 'Mesin Cuci', img: MesinCuci },
  { name: 'Listrik', img: Listrik },
  { name: 'Televisi', img: Televisi },
  { name: 'Radio', img: Radio },
  { name: 'Saluran Air', img: Air },
  { name: 'Kulkas', img: Kulkas },
];
const CardLayanan = () => {
  return (
    <div className="cardlayanan-container">
    {services.map((service, index) => (
      <button key={index} className="cardlayanan-button">
        <img src={service.img} alt={service.name} />
        <div>{service.name}</div>
      </button>
    ))}
  </div>
  )
}

export default CardLayanan
