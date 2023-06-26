import React, { useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "../styles/login-page.scss"
import Loading from '../components/loader components/Loader';
import "bootstrap/dist/css/bootstrap.min.css"
import { FaTwitter, FaGoogle, FaFacebookF } from 'react-icons/fa'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePassWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleLogin = () => {
        const validUsername = 'user';
        const validPassword =  'password';
        const validEmail = 'gmail@gmail.com'

        if (username === validUsername && password === validPassword && email === validEmail) {
            setLoading(true);

            setTimeout(() => {
                setLoggedIn(true);
                setLoading(false);
                navigate('/home');
            }, 6000);
        } else {
            alert('Wrong Username or Password. Please try again')
        }
    }
   
    const handleKeyLogin = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleLogin()
      }
    }
    

    if (loggedIn) {
        return <div className='main'>WELCOME TO OUR SHOP</div>
    }

    if (isLoading) {
        return <Loading/>;
    }

    return (
<section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter value of the placeholders of input for login -- 
              Zəhmət olmasa boşluqların içərisində olan sözləri yazaraq login edin.</p>

              <div className="form-outline form-white mb-4">
                <input
                        type="email"
                        name="email"
                        className="form-control form-control-lg"
                        placeholder="user"
                        value={username}
                        onChange={handleUsernameChange}
                        required />
              </div>
              <div className="form-outline form-white mb-4">
                <input
                        type="email"
                        name="email"
                        className="form-control form-control-lg"
                        placeholder="gmail@gmail.com"
                        value={email}
                        onChange={handleEmailChange}
                        required />
              </div>

              <div className="form-outline form-white mb-4">
                <input
                        type="password"
                        name="pswd"
                        className="form-control form-control-lg"
                        placeholder="password"
                        required
                        value={password}
                        onChange={handlePassWordChange} />
              </div>

              <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

              <button className="btn btn-outline-light btn-lg px-5" onClick={handleLogin} >Login</button>

              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <NavLink to="/" className="text-white"><FaFacebookF/></NavLink>
                <NavLink to="/" className="text-white"><i className="mx-4 px-2"><FaTwitter/></i></NavLink>
                <NavLink to="/" className="text-white"><FaGoogle/></NavLink>
              </div>

            </div>

            <div>
              <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default Login;




