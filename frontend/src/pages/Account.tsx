import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../services/localStorage';
import { allTransactions, cashInTransactions, cashOutTransactions } from '../services/apiRequests';

export default function Account() {
  const navigate = useNavigate();
  const [userToken, setUserToken] = useState('');
  const [list, setList] = useState('');


  useEffect(() => {
    try {
      const { token } = getUser();
      setUserToken(token);
      allTransactions(token).then((dataObj) => { setList(dataObj) });
    } catch (error) {
      console.error(error);
    }
  }, [])

  console.log(list)
  // console.log(userToken)

  return (
    <>
       <p>------- HEADER ---------</p>
       <p>BALANCE ACCOUNT</p>
       <p>NEW TRANSACTION</p>
       <p>------- HEADER ---------</p>
    </>
  )
}
