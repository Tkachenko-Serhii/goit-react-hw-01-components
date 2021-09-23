import PropTypes from 'prop-types';
import defaultImage from '../image/default.jpg';

export default function FriendList({ avatar = defaultImage, name, isOnline }) {
  return (
    <li className="item">
      <span className="status" data-status={isOnline}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
