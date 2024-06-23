import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImgRegister from '../Assets/Img/ImgLogin.png';
import Logo from '../Assets/Img/Logoblack.png';
import axios from 'axios';

const RegisterPage = () => {
  const [userType, setUserType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const response = await axios.post('http://localhost:4000/register', {
          userType,
          name,
          email,
          password,
          confPassword: confirmPassword
        });
        console.log(response.data); // Assuming backend responds with a success message
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          navigate('/login');
        }, 2000);
      } catch (error) {
        console.error('Registration failed:', error.response.data);
        alert('Registration failed. Please try again.');
      }
    } else {
      alert('Passwords do not match');
    }
  };

  const styles = {
    registerContainer: {
      display: 'flex',
      height: '100vh'
    },
    jarakForm:{
      marginTop: '20px'
    },

    left: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#102C57'
    },
    registerImage: {
      maxWidth: '100%',
      height: 'auto'
    },
    right: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    },
    registerForm: {
      maxWidth: '400px',
      width: '100%',
      textAlign: 'center'
    },
    logo: {
      maxWidth: '150px',
      marginBottom: '20px',
      marginLeft: '135px'
    },
    formGroup: {
      marginBottom: '15px'
    },
    formControl: {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px'
    },
    btnSubmit: {
      width: '100%',
      padding: '15px',
      backgroundColor: '#ffd700',
      color: 'black',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      boxShadow: '4px 4px 15px 0px rgba(0, 0, 0, 0.18) inset',
      fontSize: '16px'
    },
    btnSubmitHover: {
      backgroundColor: '#0d2444',
      color: 'white'
    },
    loginLink: {
      display: 'block',
      marginTop: '15px',
      color: '#007bff',
      textDecoration: 'none'
    },
    loginLinkHover: {
      textDecoration: 'underline'
    },
    popup: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '20px',
      border: '1px solid #ccc',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
      textAlign: 'center'
    }
  };

  return (
    <div style={styles.registerContainer}>
      <div style={styles.left}>
        <img src={ImgRegister} alt="Register Illustration" style={styles.registerImage} />
      </div>
      <div style={styles.right}>
        <div style={styles.registerForm}>
          <img src={Logo} alt="Logo" style={styles.logo} />
          <h2>Daftar Akun Baru</h2>
          <p>Silahkan isi form untuk membuat akun baru!</p>
          <form onSubmit={handleSubmit} style={styles.jarakForm}>
            <div style={styles.formGroup}>
              <select 
                style={styles.formControl}
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="" disabled hidden>Masuk Sebagai</option>
                <option value="pencari">Pencari</option>
                <option value="penyedia">Penyedia</option>
              </select>
            </div>
            <div style={styles.formGroup}>
              <input 
                type="Username" 
                placeholder="Nama Lengkap" 
                style={styles.formControl}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div style={styles.formGroup}>
              <input 
                type="email" 
                placeholder="Email" 
                style={styles.formControl}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div style={styles.formGroup}>
              <input 
                type="password" 
                placeholder="Kata Sandi" 
                style={styles.formControl}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div style={styles.formGroup}>
              <input 
                type="password" 
                placeholder="Konfirmasi Kata Sandi" 
                style={styles.formControl}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button 
              type="submit" 
              style={styles.btnSubmit}
              onMouseEnter={(e) => e.target.style.backgroundColor = styles.btnSubmitHover.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = styles.btnSubmit.backgroundColor}
            >Daftar</button>
          </form>
          <a 
            href="/login" 
            style={styles.loginLink}
            onMouseEnter={(e) => e.target.style.textDecoration = styles.loginLinkHover.textDecoration}
            onMouseLeave={(e) => e.target.style.textDecoration = styles.loginLink.textDecoration}
          >Sudah punya akun? Masuk di sini.</a>
        </div>
      </div>
      {showPopup && (
        <div style={styles.popup}>
          <p>Registrasi Berhasil!</p>
        </div>
      )}
    </div>
  );
}

export default RegisterPage;
