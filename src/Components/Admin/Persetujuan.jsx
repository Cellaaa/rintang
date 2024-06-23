import React from 'react'
import { Link } from 'react-router-dom'
import Sertifikat from '../../Assets/Admin/Img/sertifikat.svg'
import '../../Assets/Admin/css/persetujuan.css'

const Persetujuan = () => {
    return (
        <>
            <div className="name-verifikasi">
                <h2>Persetujuan Verifikasi</h2>
            </div>
            <div className='bg-verifikasi'>
                <div className='data'>
                    <form action="">
                        <div className='input-name-row'>
                            <div className="input-nama">
                                <span className="detail-nama">Nama</span>
                            </div>
                            <div className='input-sama-dengan'>
                                <span className="sama-dengan">:</span>
                            </div>
                            <div className='input-nama'>
                                <span className="detail">Ahmad Kasim</span>
                            </div>
                        </div>
                        <div className='input-name-row'>
                            <div className="input-nama">
                                <span className="detail-nama">Nama Layanan</span>
                            </div>
                            <div className='input-sama-dengan'>
                                <span className="sama-dengan">:</span>
                            </div>
                            <div className="input-nama">
                                <span className="detail">Service AC</span>
                            </div>
                        </div>
                        <div className='input-name-row'>
                            <div className="input-nama">
                                <span className="detail-nama">No.Whatshapp</span>
                            </div>
                            <div className='input-sama-dengan'>
                                <span className="sama-dengan">:</span>
                            </div>
                            <div className="input-nama">
                                <span className="detail">+62 891 0234 5678</span>
                            </div>
                        </div>
                        <div className='input-name-row'>
                            <div className="input-nama">
                                <span className="detail-nama">Kota</span>
                            </div>
                            <div className='input-sama-dengan'>
                                <span className="sama-dengan">:</span>
                            </div>
                            <div className="input-nama">
                                <span className="detail">Malang</span>
                            </div>
                        </div>
                        <div className='input-name-row'>
                            <div className="input-nama">
                                <span className="detail-nama">Provinsi</span>
                            </div>
                            <div className='input-sama-dengan'>
                                <span className="sama-dengan">:</span>
                            </div>
                            <div className="input-nama">
                                <span className="detail">Jawa Timur</span>
                            </div>
                        </div>
                        <div className='input-name-row'>
                            <div className="input-nama">
                                <span className="detail-nama">Alamat</span>
                            </div>
                            <div className='input-sama-dengan'>
                                <span className="sama-dengan">:</span>
                            </div>
                            <div className="input-nama">
                                <span className="detail">Jl. Raya Oro-Oro Ombo No.9, Temas, Kec. Batu, Kota Batu, Jawa Timur 65315</span>
                            </div>
                        </div>
                        <div className='input-name-row'>
                            <div className="input-nama">
                                <span className="detail-nama">Sertifikat</span>

                            </div>
                            <div className='input-sama-dengan'>
                                <span className="sama-dengan">:</span>
                            </div>
                            <div className='input-nama'>
                                <img className="img-sertif" src={Sertifikat} />
                            </div>
                        </div>
                    </form>
                </div>
                <div className='tompol-terima'>
                    <Link to="/admin/verifikasi">
                        <button className="reject" onClick={() => handleReject}>Tolak</button>
                    </Link>
                    <Link to="/admin/verifikasi">
                    <button className="accept" onClick={() => handleAccept}>Terima</button>
                    </Link>
                </div>
            </div>
        </>

    )
}

export default Persetujuan