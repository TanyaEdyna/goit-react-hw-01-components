import Profile from "./Profile/Profile"
import Statistics from "./Statistics/Statistics"
import user from "./Data/user.json"
import data from "./Data/data.json"

export const App = () => {
  return (
    
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile userData={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
};
