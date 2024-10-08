import React, {useContext, useEffect, useState} from "react";
import styles from "./DropDownMenu.module.scss";
import {UserContext} from "@/context/UserContext";
import {Link} from "react-router-dom";
import {ROUTES} from "@/router/consts";

type DropDownMenuProps = {
  toggleMenu: boolean;
}

const DropDownMenu = ({toggleMenu}: DropDownMenuProps) => {
  const [className, setClassName] = useState<string>(styles.containerClosed);
  const {logout} = useContext(UserContext);

  useEffect(() => {
    toggleMenu ? setClassName(styles.containerOpen) : setClassName(styles.containerClosed);
  }, [toggleMenu]);

  const handleLogout = () => {
    return logout();
  };

  return (
    <div className={`${styles.dropDownContainer} ${className}`}>
      <div className={styles.account}>
        <Link className={styles.menuLink} to={ROUTES.USER}>My Account</Link>
      </div>
      <div className={styles.otherLinks}>
        <Link className={styles.menuLink} to={ROUTES.USER_BOOKINGS}>My
          Booking</Link>
        <p onClick={handleLogout} className={styles.menuLink}>Logout</p>
      </div>
    </div>
  );
};

export default DropDownMenu;
