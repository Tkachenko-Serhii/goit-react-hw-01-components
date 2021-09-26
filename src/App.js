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
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <TransactionHistory transactions={transactions} />
    </main>
  );
}
