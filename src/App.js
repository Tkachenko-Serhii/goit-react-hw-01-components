import Profile from './components/Profile';
import user from './json/user.json';
import statisticalData from './json/statistical-data.json';
import Statistics from './components/Statistics';

// import Friends from './components/Friends';
// import friends from './json/friends.json';

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
      <Statistics title="Upload stats" statisticalData={statisticalData} />
    </main>
  );
}
