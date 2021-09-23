import Profile from './components/Profile';
import user from './json/user.json';

import statisticalData from './json/statistical-data.json';
import Statistics from './components/Statistics';

import FriendList from './components/FriendList';
import friends from './json/friends.json';

import TransactionHistory from './components/TransactionHistory';
import transactions from './json/transactions.json';

export default function App() {
  return (
    <main>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <section className="statistics">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
          {statisticalData.map(data => (
            <Statistics
              key={data.id}
              label={data.label}
              percentage={data.percentage}
            />
          ))}
        </ul>
      </section>
      <ul className="friend-list">
        {friends.map(friend => (
          <FriendList
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <TransactionHistory
              key={transaction.id}
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
}
