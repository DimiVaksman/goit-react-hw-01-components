import { PropTypes } from 'prop-types';
import { Status, List, Avatar, FriendsName } from './friendsItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <List isOnline={isOnline}>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <FriendsName isOnline={isOnline}>{name}</FriendsName>
    </List>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
