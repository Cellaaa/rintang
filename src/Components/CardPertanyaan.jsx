import React from 'react'
import '../Assets/css/Card.css'

const Card = ({ title, content }) => (
  <div className="cardpertanyaan">
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

const CardPertanyaan = () => {
  return (
    <div className='CardPertanyaan' style={{ display: 'flex', justifyContent: 'space-around' }}>
       <Card 
        title="Bagaimana cara menghubungi layanan RINTANG Services?" 
        content="Anda dapat menghubungi kami melalui nomor kontak berupa WhatsApp yang tertera pada website ini. Kami akan dengan senang hati menjawab pertanyaan Anda, memberikan perkiraan biaya, dan membuat janji untuk pelayanan instalasi yang dibutuhkan." 
      />
      <Card 
        title="Berapa biaya yang diperlukan untuk menggunakan jasa dari RINTANG Services?" 
        content="Biaya akan bervariasi tergantung pada jenis layanan yang Anda butuhkan, kompleksitas pekerjaan, kerumitan pekerjaan, dan faktor lainnya. Kami menyediakan perkiraan harga yang transparan dan dapat memberikan penawaran khusus sesuai dengan kebutuhan." 
      />
      <Card 
        title="Berapa lama waktu yang dibutuhkan untuk menyelesaikan pekerjaan?" 
        content="Durasi pengerjaan akan bergantung pada jenis pekerjaan yang dilakukan. Jika itu adalah pekerjaan yang berat maka waktu yang dibutuhkan mungkin lebih lama dibandingkan pekerjaan yang sederhana. Kami akan memberikan perkiraan waktu yang diperlukan sebelum memulai pekerjaan." 
      />
    </div>
  )
}

export default CardPertanyaan
