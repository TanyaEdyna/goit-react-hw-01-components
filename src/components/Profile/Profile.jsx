
import PropTypes from 'prop-types';


const Profile = ({ userData }) => {
    const { username, tag, location, avatar, stats: { followers, views, likes } } = userData;  
return (  
<div className = "profile">
  <div className="description">
    <img
      src={avatar}
      alt={username}
      
      className="avatar"
    />
    <p className="name">{username}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers: </span>
      <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views: </span>
      <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes: </span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
</div>)

}

Profile.propTypes = {
  userData: PropTypes.shape({//PropTypes.shape задає формат об'єкта, що містить набір властивостей з певними типами і значеннями
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Profile;



