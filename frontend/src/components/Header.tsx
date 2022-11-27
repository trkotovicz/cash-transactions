import { useState, useEffect } from 'react';
import { getUser } from '../services/localStorage';
import { accountById, createTransaction } from '../services/apiRequests';
import IAccount from '../interfaces/IAccount';

export default function Header() {
  const [user, setUser] = useState('');
  const [userToken, setUserToken] = useState('');
  const [balance, setBalance] = useState<IAccount | null>();
  const [showHidden, setShowHidden] = useState(false);
  const [userSend, setUserSend] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    try {
      const { user: { accountId, username}, token } = getUser();
      setUser(username);
      setUserToken(token);
      accountById(accountId, token).then((dataObj) => { setBalance(dataObj.balance) });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const newTransaction = async () => {
    try {
      console.log(userToken);
      const teste = { username: userSend, value }
      console.log(teste);
      
      await createTransaction(teste, userToken);
      console.log(userSend, value)
      setShowHidden(false)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <p>{ `Hello, ${user}` }</p>
      <p>{ `Your account balance is: $ ${String(balance).replace('.', ',')}`}</p>
      <button type='button' onClick={ () => setShowHidden(true) }>new transaction</button>

      {showHidden ? (
          <form className='form-new-transaction'>
            <input
              type='text'
              placeholder='username'
              value={ userSend }
              onChange={ ({target}) => setUserSend(target.value) }
              />
            <input
              type='number'
              placeholder='value'
              value={ value }
              onChange={ ({target}) => setValue(target.value) }
            />
            <button type='button' onClick={ newTransaction }>confirm</button>
          </form>
      ) : ''}
    </>
  )
}
