import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../services/apiRequests';
import { saveUser } from '../services/localStorage';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showHidden, setShowHidden] = useState(false);

  const handleClickLogin = async () => {
    try {
      const userData = await userLogin({ username, password });
      const { user } = userData;
      saveUser(userData);
      navigate(`/account/${user.accountId}`)
    } catch (error) {
      setShowHidden(true);
    }
  };

  const isValid = () => {
    const three = 3;
    const reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return !(reg.test(password) && username.length >= three);
  };

  return (
    <>
      <form className='login-form'>
        <div className='login-container'>
          <label htmlFor='username' className='username-label'>
            USERNAME
            <input
              className='username-input'
              type='text'
              placeholder='username'
              value={ username }
              onChange={ ({target}) => setUsername(target.value) }
              required
            />
          </label>
          <label htmlFor='password'     className='password-label'>
            PASSWORD
            <input
              className='password-input'
              type='password'
              placeholder='password'
              value={ password }
              onChange={ ({target}) => setPassword(target.value) }
              required
            />
          </label>

          {showHidden ? (
            <span className='span-login-invalid'>
              USERNAME OR PASSWORD INVALIDS
            </span>
          ) : ''}

        </div>

        <div className='login-btn-container'>
          <button
          className='login-btn'
          type='button'
          disabled={ isValid() }
          onClick={ handleClickLogin }
          >
            LOGIN
          </button>
          <Link to="/register">
            <button
            className='register-btn'
            type='button'
            >
              CRIAR CONTA
            </button>
          </Link>
          
        </div>
      </form>
    </>
  )
}
