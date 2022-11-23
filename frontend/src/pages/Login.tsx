import React, { useState } from 'react';
import { userLogin } from '../services/apiRequests';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showHidden, setShowHidden] = useState(false);

  const handleClickLogin = async () => {
    const data = { username, password };
    const userData = await userLogin(data);
    if (!userData) setShowHidden(true);
  };

  const isValid = () => {
    const eight = 8;
    const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
    return !(reg.test(password) && password.length >= eight);
  }

    return (
      <>
        <form className='login-form'>
          <div className='login-container'>
          <label htmlFor='username' className='username-input'>
            USERNAME
            <input
              type='text'
              value={ username }
              onChange={ ({target}) => setUsername(target.value) }
              required
            />
          </label>
          <label htmlFor='password' className='password-input'>
            SENHA
            <input
              type='password'
              value={ password }
              onChange={ ({target}) => setPassword(target.value) }
              required
            />
          </label>
          </div>

          <div className='button-container'>
            <button
            className='login-btn'
            type='button'
            disabled={ isValid() }
            onClick={ handleClickLogin }
            >
              LOGIN
            </button>
            <button
            className='register-btn'
            type='button'
            >
              CRIAR CONTA
            </button>
          </div>
          {showHidden ? (
            <span className='span-invalid-login'>
              USERNAME E/OU SENHA INVÁLIDOS
            </span>
          ) : ''}
        </form>
      </>
    )
}
