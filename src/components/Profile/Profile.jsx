import { Description } from "components/description/Description";
import { PropTypes } from "prop-types";


export const Profile = ({items}) => {
return (<div>
{items.map((item) => (
    <div key={item.username}>
        {item.username}
        <Description item={item}/>
    </div>))}
</div>)
}


Profile.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string.isRequired
    })).isRequired,
}