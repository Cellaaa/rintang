import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Background from '../../Assets/Admin/Img/Background_LA.png';
import Invisible from '../../Assets/Admin/Img/Invisible.png';
import { useAuth } from '../../Components/AuthContext';

const styles = {
  body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: '#fcfcfc',
    margin: 0,
    padding: 0,
  },
  splitScreen: {
    display: 'flex',
    width: '80%',
    maxWidth: '1200px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  left: {
    width: '50%',
    backgroundColor: '#102C57',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
  logoContainer: {
    textAlign: 'center',
    color: 'white',
  },
  logoImage: {
    width: '150px',
    marginBottom: '1rem',
  },
  right: {
    width: '50%',
    backgroundColor: '#fcfcfc',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '2rem',
  },
  opening: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  openingTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  openingSubtitle: {
    fontSize: '1rem',
    color: '#555',
  },
  form: {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  passwordContainer: {
    position: 'relative',
  },
  showHide: {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },
  checkbox: {
    marginRight: '0.5rem',
  },
  label: {
    fontSize: '0.875rem',
    color: '#555',
  },
  signupBtn: {
    display: 'block',
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#233975',
    color: 'white',
    textAlign: 'center',
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  signupBtnHover: {
    backgroundColor: '#1d2e60',
  },
  '@media (max-width: 768px)': {
    splitScreen: {
      flexDirection: 'column',
      width: '95%',
    },
    left: {
      width: '100%',
      height: '50vh',
    },
    right: {
      width: '100%',
      height: '50vh',
    },
  },
};

const Logo_Rintang = () => {
  const navigate = useNavigate();
  const {login} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const { Authorization } = response.data;
        login(Authorization);
        navigate('/admin/penyedia-jasa');
      } else {
        throw new Error(response.data.error || 'Failed to authenticate');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } 
  };
  const togglePasswordVisibility = () => {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
  };
  return (
    <div style={styles.body}>
      <div style={styles.splitScreen}>
        <div style={styles.left}>
          <div style={styles.logoContainer}>
            <img src={Background} alt="Rintang Services" style={styles.logoImage} />
          </div>
        </div>
        <div style={styles.right}>
          <div style={styles.opening}>
            <h2 style={styles.openingTitle}>Login Admin</h2>
            <h3 style={styles.openingSubtitle}>Silahkan isi dulu sebelum masuk</h3>
          </div>
          <form style={styles.form} onSubmit={handleSubmit} >
            {/* <input
              type="text"
              placeholder="Username"
              aria-label="Username"
              style={styles.input}
            /> */}
            <input
            id="email"
              type="email"
              placeholder="Email"
              aria-label="Email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div style={styles.passwordContainer}>
              <input
              id='password'
                type="password"
                placeholder="Kata Sandi"
                aria-label="Password"
                style={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div style={styles.showHide} onClick={togglePasswordVisibility}>
                <img src={Invisible} alt="Toggle visibility" />
              </div>
            </div>
            <div style={styles.checkboxContainer}>
              <input type="checkbox" style={styles.checkbox} />
              <label style={styles.label}>Simpan kata sandi?</label>
            </div>
            <button type="submit" style={styles.signupBtn}>Masuk</button>
            {/* <Link to="/beranda" style={styles.signupBtn}>
              Masuk
            </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Logo_Rintang;
