import React from "react";
import styles from "./DropDownMenu.module.scss";
import {User} from "@/components/user/types";


type DropDownMenuProps = {
  user: User;

}

const DropDownMenu = ({user}: DropDownMenuProps) => {

  const handleLogout = () => {
    //TODO: User logout logic
  };

  return (
    <div className={styles.dropDownContainer}>
      <div className={styles.account}>
        <span className={styles.menuLink}>My Account</span>
      </div>
      <div className={styles.otherLinks}>
        <span className={styles.menuLink}>My Booking</span>
        <span onClick={handleLogout} className={styles.menuLink}>Logout</span>
      </div>
    </div>
  );
};

export default DropDownMenu;
