import clsx from "clsx";
import css from "./FriendListItem.module.css"

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const statusClass = clsx(
    isOnline === true ? css.online : css.offline
  )

    return (
    <div className={css.listItem}>
  <img className={css.avatar} src={avatar} alt="Avatar" width="" />
        <p className={css.name}>{name}</p>
  <p className={statusClass}>{isOnline === true ? "Online" : "Offline"}</p>
</div>
)
}