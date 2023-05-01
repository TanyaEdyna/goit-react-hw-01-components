import { Profile } from "./Profile/Profile"
import { Statistics } from "./Statistics/Statistics"
// import user from "../components/Data"

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
      <Profile userData={user}/>
    </div>
  );
};
