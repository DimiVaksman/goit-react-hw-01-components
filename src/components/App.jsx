import { Profile } from "./Profile/Profile";
import user from '../user.json'
import { Statistics } from "./Statistics/Statistics";
import data from '../data.json'
import friends from '../friends.json'

import {FriendList} from './FriendList/FriendList'


export const App = () => {
  return (
    <div>
<Profile items={user} />

<Statistics stats={data}/>

<FriendList friends={friends}/>

    </div>
  );
};
