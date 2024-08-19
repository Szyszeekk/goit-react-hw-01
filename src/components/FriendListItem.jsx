import css from "../css/FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? css.online : css.offline;

  return (
    <div className={css.friendListItemContainer}>
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        width="48"
        className={css.avatar}
      />
      <p className={css.name}>{name}</p>
      <p className={`${css.status} ${statusClass}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
