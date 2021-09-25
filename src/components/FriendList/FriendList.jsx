import PropTypes from 'prop-types';
import defaultImage from '../../image/default.jpg';
import s from './FriendList.module.css';

export default function FriendList({
  avatar = defaultImage,
  name,
  isOnline = false,
  id,
}) {
  const statusColor = isOnline ? 'green' : 'red';
  return (
    <li className={s.item} key={id}>
      <span
        className={s.status}
        style={{ backgroundColor: statusColor }}
      ></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
