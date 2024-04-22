import css from './Profile.module.css';

export default function Profile({ avatar, username, tag, location, stats }) {
  return (
    <div className={css.profile_container}>
      <div className={css.profile_up}>
        <img className={css.profile_img} src={avatar} alt={username} />
        <p className={css.profile_name}>{username}</p>
        <p className={css.profile_tag}>@{tag}</p>
        <p className={css.profile_location}>{location}</p>
      </div>

      <ul className={css.profile_states}>
        <li className={css.profile_state}>
          <span className={css.profile_state_title}>Followers</span>
          <span className={css.profile_state_property}>{stats.followers}</span>
        </li>
        <li className={css.profile_state}>
          <span className={css.profile_state_title}>Views</span>
          <span className={css.profile_state_property}>{stats.views}</span>
        </li>
        <li className={css.profile_state}>
          <span className={css.profile_state_title}>Likes</span>
          <span className={css.profile_state_property}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
