import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
export default function TransactionHistory({ transactions }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.Tr}>
          <th className={s.Th}>Type</th>
          <th className={s.Th}>Amount</th>
          <th className={s.Th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id} className={s.Tr}>
            <td className={s.Td}>{transaction.type}</td>
            <td className={s.Td}>{transaction.amount}</td>
            <td className={s.Td}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};
