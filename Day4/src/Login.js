import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';  
import { Link } from 'react-router-dom';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
     
      const response = await fetch('http://localhost:8080/posts');
      const users = await response.json();

      const user = users.find(
        user => (user.email === emailOrPhone || user.phone === emailOrPhone) && user.password === password
      );

      if (user) {
 
        navigate('/');
      } else {
        setError('Invalid email/phone or password');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="img">
      <div className="content">
        <header>Login Form</header>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <span className="fa fa-user"></span>
            <input type="text" required placeholder="Email or Phone" value={emailOrPhone} onChange={e => setEmailOrPhone(e.target.value)} />
          </div>
          <div className="field space">
            <span className="fa fa-lock"></span>
            <input type={showPassword ? 'text' : 'password'} className="pass-key" required placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
            <span className="show" onClick={togglePassword}>
              {showPassword ? 'HIDE' : 'SHOW'}
            </span>
          </div>
          {error && <div className="error">{error}</div>}
          <div className="pass">
            <a href="#">Forgot Password?</a>
          </div>
          <div className="field">
            <button type="submit" className='loginlink'>Login</button>
          </div>
        </form>
        <div className="login"> Or login with </div>
        <div className="links">
          <div className="facebook">
            <i className="fab fa-facebook-f"><span>Facebook</span></i>
          </div>
          <div className="instagram">
            <i className="fab fa-instagram"><span>Instagram</span></i>
          </div>
        </div>
        <div className="signup">
          Don't have an account? <Link to="/sign">Signup Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
