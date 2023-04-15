import { Description } from "components/Profile/description/Description";
import { PropTypes } from "prop-types";
import { ProfileStyles } from "./Profile.styled";
import { ProfileStats } from "components/Profile/Stats/Stats";


export const Profile = ({items}) => {
return (<ProfileStyles>
{items.map((item) => (
    <div key={item.username}>
        <Description item={item}/>
        <ProfileStats item={item} />
    </div>))}
</ProfileStyles>)
}


Profile.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string.isRequired
    })).isRequired,
}
