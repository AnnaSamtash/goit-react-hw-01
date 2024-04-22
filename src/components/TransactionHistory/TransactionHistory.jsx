import css from './TransactionHistory.module.css';

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.transaction_table}>
      <thead className={css.transaction_table_head}>
        <tr>
          <th className={css.transaction_table_head_title}>Type</th>
          <th className={css.transaction_table_head_title}>Amount</th>
          <th className={css.transaction_table_head_title}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.transaction_table_body}>
        {transactions.map(transaction => {
          return (
            <tr key={transaction.id} className={css.transaction}>
              <td className={css.transaction_spot}>{transaction.type}</td>
              <td className={css.transaction_spot}>{transaction.amount}</td>
              <td className={css.transaction_spot}>{transaction.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
