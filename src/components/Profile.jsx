import css from "../css/Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.main}>
        <img src={image} alt="User avatar" className={css.image} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span className={css.listItemMain}>Followers</span>
          <span className={css.listItemStat}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.listItemMain}>Views</span>
          <span className={css.listItemStat}>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.listItemMain}>Likes</span>
          <span className={css.listItemStat}>{stats.views}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
