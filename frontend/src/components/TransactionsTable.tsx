// import PropTypes from 'prop-types';
import ITransaction from '../interfaces/ITransaction';

interface Props {
  transaction: ITransaction;
}

function TransactionsTable({ transaction }: Props) {
  return (
    <table className='transactions-table'>
    <thead>
      <tr>
        <th>id</th>
        <th>to</th>
        <th>from</th>
        <th>value</th>
        <th>date</th>
      </tr>
    </thead>
    <tbody>
      <tr key={ transaction.id }>
        <td>{ transaction.id }</td>
        <td>{ transaction.creditedUser.username }</td>
        <td>{ transaction.debitedUser.username }</td>
        <td>{ transaction.value }</td>
        <td>{ transaction.createdAt }</td>
      </tr>
    </tbody>
   </table>
  );
}

// TransactionsTable.propTypes = {
//   transactions: PropTypes.shape({

//   }).isRequired,
// };

export default TransactionsTable;
