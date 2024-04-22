import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div
      className={clsx('friendListItem', {
        isOnline: 'online',
      })}
    >
      <img
        className={css.friendListItem_avatar}
        src={avatar}
        alt={name}
        width="48"
      />
      <p className={css.friendListItem_name}>{name}</p>
      {isOnline ? (
        <p className={css.friendListItem_online}>Online</p>
      ) : (
        <p className={css.friendListItem_offline}>Offline</p>
      )}
    </div>
  );
}
