import { PropTypes } from "prop-types";

export const FriendList = ({friends}) => {
return (
    <ul>
{friends.map((friend) =>(
<li key={friend.id}>
  <span>{friend.isOnline}Status</span>
  <img src={friend.avatar} alt={friend.name} width="48" />
  <p>{friend.name}</p>
</li>
))}
    </ul>
)
}