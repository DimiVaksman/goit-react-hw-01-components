import PropTypes from "prop-types"

export const Description = ({
    item:{username, tag, location, avatar}}) => {
return (
    <div>
    <img
      src={avatar}
      alt={username}
      class="avatar"
    />
    <p class="name">{username}</p>
    <p class="tag">{tag}</p>
    <p class="location">{location}</p>
  </div>
)
}