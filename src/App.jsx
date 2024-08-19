import Profile from "./components/Profile";
import FriendList from "./components/FriendList";
import TransactionHistory from "./components/TransactionHistory";

import userData from "./json/userData.json";
import friends from "./json/friends.json";
import transactions from "./json/transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
