import PropTypes from 'prop-types';
import { Stats, StatsItems, Label, Info } from './Stats.styled';

export const ProfileStats = ({ item: { stats } }) => {
  return (
    <Stats>
      <StatsItems>
        <Label>Followers</Label>
        <Info>{stats.followers}</Info>
      </StatsItems>
      <StatsItems>
        <Label>Views</Label>
        <Info>{stats.views}</Info>
      </StatsItems>
      <StatsItems>
        <Label>Likes</Label>
        <Info>{stats.likes}</Info>
      </StatsItems>
    </Stats>
  );
};

ProfileStats.propTypes = {
  item: PropTypes.shape({
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
