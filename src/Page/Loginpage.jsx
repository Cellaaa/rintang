import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImgLogin from '../Assets/Img/ImgLogin.png';
import Logo from '../Assets/Img/Logoblack.png';
import { useAuth } from '../Components/AuthContext';
import { CgSpaceBetween } from 'react-icons/cg';

const Loginpage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to authenticate');
      }
      const responseData = await response.json();
      const { Authorization,userType } =  responseData;

      localStorage.setItem('token', Authorization);

      // Use login from context
      login(Authorization);

      if (userType === 3) {
        navigate('/Dashboard_pencari');
      } else if (userType === 2) {
        navigate('/formpenyedia');
      } else {
        alert('Please select a valid user type');
      }
    } catch (error) {
      console.error('Login error:', error.message);
      alert(error.message);
    }
  };

  const styles = {
    loginContainer: {
      display: 'flex',
      height: '100vh',
      flexDirection: 'row',
    },
    jarak: {
      marginTop: '40px'
    },
    left: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#102C57'
    },
    right: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    },
    loginForm: {
      maxWidth: '400px',
      width: '100%',
      textAlign: 'center'
    },
    logo: {
      maxWidth: '150px',
      marginBottom: '20px',
      marginLeft: '130px'
    },
    formGroup: {
      marginBottom: '15px',

    },
    formControl: {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px'
    },
    rememberMe: {
      display: 'flex',
      alignItems: 'center',
      width: '180px',
      justifyContent: 'space-between'
    },
    btnSubmit: {
      padding: '10px',
      width: '100%',
      backgroundColor: '#ffd700',
      color: 'black',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      display: 'block',
      margin: '0 auto',
      marginTop: '10px',
      fontSize: '18px'
    },
    btnSubmitHover: {
      backgroundColor: '#ffc700'
    },
    forgotPassword: {
      display: 'block',
      marginTop: '15px',
      color: '#007bff',
      textDecoration: 'none'
    },
    socialLogin: {
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'center',
      gap: '10px'
    },
    btnSocial: {
      flex: 1,
      padding: '10px',
      margin: '5px 0',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      backgroundColor: '#ffc700',
      color: 'black'
    },
    btnSocialHover: {
      backgroundColor: '#ffc700'
    }
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.left}>
        <img src={ImgLogin} alt="Login Illustration" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      <div style={styles.right}>
        <div style={styles.loginForm}>
          <img src={Logo} alt="Logo" style={styles.logo} />
          <h2>Selamat Datang Kembali</h2>
          <p>Silahkan isi form untuk Masuk!</p>
          <form onSubmit={handleSubmit} style={styles.jarak}>
            {/* <div style={styles.formGroup}>
              <select
                style={styles.formControl}
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="" disabled hidden>Masuk</option>
                <option value="pencari">Pencari</option>
                <option value="penyedia">Penyedia</option>
              </select>
            </div> */}
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
              <div style={styles.rememberMe}>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Simpan Kata Sandi?</label>
              </div>
            </div>
            <button type="submit" style={styles.btnSubmit}>Masuk</button>
            <a href="/Regist" style={styles.forgotPassword}>Belum Punya Akun?</a>
          </form>
          <div style={styles.socialLogin}>
            <button
              className="btn-social facebook"
              style={styles.btnSocial}
              onMouseEnter={(e) => e.target.style.backgroundColor = styles.btnSocialHover.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = styles.btnSocial.backgroundColor}
            >
              Facebook
            </button>
            <button
              className="btn-social google"
              style={styles.btnSocial}
              onMouseEnter={(e) => e.target.style.backgroundColor = styles.btnSocialHover.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = styles.btnSocial.backgroundColor}
            >
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
