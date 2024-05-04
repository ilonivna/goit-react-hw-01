import css from "./Profile.module.css";


export default function Profile({ name, tag, location, image, stats: {
        followers, views, likes
    } }
) {
    return (
<div className={css.wrapper}>
  <div>
    <img
    className={css.profilePhoto}
      src={image}
      alt="User avatar"
    />
    <p className={css.profileName}>{name}</p>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <ul className={css.statList}>
    <li className={css.listItem}>
      <span>Followers</span>
      <span className={css.statNumber}>{followers}</span>
    </li>
    <li className={css.listItem}>
      <span>Views</span>
      <span className={css.statNumber}>{views}</span>
    </li>
    <li className={css.listItem}>
      <span>Likes</span>
      <span className={css.statNumber}>{likes}</span>
    </li>
  </ul>
</div>
    )
}