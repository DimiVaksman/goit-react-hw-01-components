import PropTypes from "prop-types"
import { Stats,StatsItems,Label } from "./Stats.styled";

export const ProfileStats = ({item:{stats}}) => {
    return <Stats>
    <StatsItems>
        <Label>Followers</Label>
      <span>{stats.followers}</span>
    </StatsItems>
    <StatsItems>
    <Label>Views</Label>
      <span>{stats.views}</span>
    </StatsItems>
    <StatsItems>
    <Label>Likes</Label>
      <span>{stats.likes}</span>
    </StatsItems>
  </Stats>
}