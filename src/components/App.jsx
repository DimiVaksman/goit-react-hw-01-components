import { Profile } from "./Profile/Profile";
import user from '../user.json'
import { Statistics } from "./Statistics/Statistics";
import data from '../data.json'
import friends from '../friends.json'
import {Friends} from './FriendList/FriendList'

import transactions  from "../transactions.json";
import { Transactions } from "./Transactions/Transactions";


export const App = () => {
  return (
    <div>
<Profile items={user} />

<Statistics stats={data}/>

<Friends friends={friends}/>

<Transactions trans={transactions}/>

    </div>
  );
};
