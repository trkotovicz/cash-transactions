import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { getUser } from '../services/localStorage';
import { allTransactions, cashInTransactions, cashOutTransactions } from '../services/apiRequests';
import ITransaction from '../interfaces/ITransaction';

export default function Account() {
  // const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [userToken, setUserToken] = useState('');
  const [list, setList] = useState<ITransaction[] | null>([]);


  useEffect(() => {
    try {
      const { user, token } = getUser();
      setUsername(user.username);
      setUserToken(token);
      allTransactions(token).then((dataObj) => { setList(dataObj) });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const cashIn = async () => {
    const data = await cashInTransactions(userToken);
    setList(data);    
  }

  const cashOut = async () => {
    const data = await cashOutTransactions(userToken);
    setList(data);    
  }

  const listAll = async () => {
    const data = await allTransactions(userToken);
    setList(data);    
  }

  return (
    <>
      <p>------- HEADER ---------</p>
      <p>BALANCE ACCOUNT</p>
      <p>NEW TRANSACTION</p>
      <p>------- HEADER ---------</p>

      <button type="button" onClick={ cashIn }>cash in</button>
      <button type="button" onClick={ cashOut }>cash out</button>
      <button type="button" onClick={ listAll }>all transactions</button>

      <table className='transactions-table'>
        <thead>
          <tr>
            <th>transaction</th>
            <th>to</th>
            <th>from</th>
            <th>value</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
        { list?.map((element) => (
          <tr key={ element.id }>
            <td>{ element.id }</td>
            <td>{ element.creditedUser.username }</td>
            <td>{ element.debitedUser.username }</td>
            <td>{ element.value.replace('.', ',') }</td>
            <td>{ moment(element.createdAt).format('DD/MM/YYYY') }</td>
          </tr>
        )) }
        </tbody>
      </table>

    </>
  )
}
