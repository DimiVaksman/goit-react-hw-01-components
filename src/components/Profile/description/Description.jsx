import PropTypes from 'prop-types';
import {
  Container,
  Avatar,
  UserName,
  Tag,
  Location,
} from './Description.styled';

export const Description = ({ item: { username, tag, location, avatar } }) => {
  return (
    <Container>
      <Avatar src={avatar} alt={username} />
      <UserName>{username}</UserName>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Container>
  );
};

Description.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};
