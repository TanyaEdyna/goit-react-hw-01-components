import Profile from "./Profile/Profile"
import Statistics from "./Statistics/Statistics"
import FriendList from "./FriendList/FriendList"
import TransactionHistory from "./TransactionHistory/TransactionHistory"
import user from "./Data/user.json"
import data from "./Data/data.json"
import friends from "./Data/friends.json"
import transaction from "./Data/transactions.json"

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
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />;

    
    </div>
  );
};
