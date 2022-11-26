import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../services/apiRequests';
import { saveUser } from '../services/localStorage';

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
          <Link to="/register">
            <button
            className='register-btn'
            type='button'
            >
              CRIAR CONTA
            </button>
          </Link>
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
