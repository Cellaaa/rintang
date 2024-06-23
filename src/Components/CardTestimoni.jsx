import React from 'react'
import '../Assets/css/Card.css'
import Holley from '../Assets/Img/Holley.png'
import Lightning from '../Assets/Img/Lightning.png'
import Francesco from '../Assets/Img/Francesco.png'

const testimonials = [
  {
    name: "Lightning McQueen",
    image: Lightning,
    quote: "Pekerjanya sangat ramah dan pengerjaannya sangat rapi. Sungguh profesional.",
    rating: 5
  },
  {
    name: "Holley Shiftwell",
    image: Holley,
    quote: "Para teknisi mereka juga sangat. Saya sangat puas dengan layanan mereka.",
    rating: 5
  },
  {
    name: "Francesco Bernoulli",
    image: Francesco,
    quote: "Pengalaman dengan layanan perbaikan AC ini sungguh hebat. Mereka sangat profesional dan cepat.",
    rating: 5
  }
]

const CardTestimoni = () => {
  return (
    <div className="testimoni-container">
      {testimonials.map((testimoni, index) => (
        <div key={index} className="cardtestimoni">
          <img src={testimoni.image} alt={testimoni.name} className="testimoni-image"/>
          <h3>{testimoni.name}</h3>
          <p>{testimoni.quote}</p>
          <div className="rating">
            {'⭐'.repeat(testimoni.rating)}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardTestimoni
