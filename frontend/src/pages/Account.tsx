import { useState, useEffect } from 'react';
import moment from 'moment';
import { getUser } from '../services/localStorage';
import { allTransactions, cashInTransactions, cashOutTransactions } from '../services/apiRequests';
import ITransaction from '../interfaces/ITransaction';
import Header from '../components/Header';
import './Account.css';

export default function Account() {
  const [userToken, setUserToken] = useState('');
  const [list, setList] = useState<ITransaction[] | null>([]);


  useEffect(() => {
    try {
      const { token } = getUser();
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
      <Header />
      <div className='main-container'>
        <div className='btns-transactions-container'>
          <button className='transactions-btn' type="button" onClick={ cashIn }>cash in</button>
          <button className='transactions-btn' type="button" onClick={ cashOut }>cash out</button>
          <button className='transactions-btn' type="button" onClick={ listAll }>all transactions</button>
        </div>

        <table className='transactions-table'>
          <thead>
            <tr>
              <th>transaction</th>
              <th>from</th>
              <th>to</th>
              <th>value</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
          { list?.map((element) => (
            <tr key={ element.id }>
              <td>{ element.id }</td>
              <td>{ element.debitedUser.username }</td>
              <td>{ element.creditedUser.username }</td>
              <td>{ element.value.replace('.', ',') }</td>
              <td>{ moment(element.createdAt).format('DD/MM/YYYY') }</td>
            </tr>
          )) }
          </tbody>
        </table>
      </div>
    </>
  )
}
