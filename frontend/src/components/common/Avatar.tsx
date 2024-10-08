import {PropsWithChildren} from "react";
import styles from "./Avatar.module.scss";

interface AvatarProps extends PropsWithChildren {
  onClick: () => void;
}

const Avatar = ({onClick, children}: AvatarProps) => {
  return <div className={styles.avatar} onClick={onClick}>{children}</div>;
};

export default Avatar;
