import FriendListItem from './FriendListItem/FriendListItem';
import css from "./FriendList.module.css"
import PropTypes from 'prop-types';


const FriendList = ({ friends }) => {
    return (
       <ul className={css.friend_list}>
        {friends.map((friend) => {
          return (
            <FriendListItem key={friend.id} friend={friend}/>
          )
        })}
    </ul> 
       
      
        )
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;