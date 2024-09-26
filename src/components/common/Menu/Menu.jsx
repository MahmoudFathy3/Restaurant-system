import PropTypes from "prop-types";
import styles from "./Menu.module.css";
import { IconButton } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Menu = ({ handlerClose }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu_content}>
        <div>
          <div className={styles.close}>
            <IconButton onClick={handlerClose}>
              <IoClose size={30} />
            </IconButton>
          </div>
          <ul className={styles.menu_list}>
            <NavLink
              to={"/a"}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <li>درج الخزينة</li>
            </NavLink>
            <NavLink
              to={"/delivery"}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <li>الدليفري</li>
            </NavLink>
            <NavLink
              to={"/d"}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <li>الاشعارات</li>
            </NavLink>
          </ul>
        </div>
        <div className={styles.logout}>
          <div className={styles.button}>
            <button>تسجيل الخروج</button>
            <MdOutlineLogout size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  handlerClose: PropTypes.func.isRequired,
};

export default Menu;
