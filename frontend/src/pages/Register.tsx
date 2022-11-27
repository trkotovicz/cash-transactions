import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userRegister } from '../services/apiRequests';
import './Register.css';

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = async () => {
    await userRegister({ username, password });
    navigate('/');
  };

  const isValid = () => {
    const three = 3;
    const reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return !(reg.test(password) && username.length >= three);
  }

  return (
    <>
      <form className='register-form'>
        <div className='register-container'>
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
        <label htmlFor='password' className='password-label'>
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
        </div>
        <div className='button-container'>
          <button
          className='register-btn'
          type='button'
          disabled={ isValid() }
          onClick={ handleClick }
          >
            CREATE ACCOUNT
          </button>
        </div>
      </form>
    </>
  )
}
