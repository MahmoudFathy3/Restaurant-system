import styles from "./Sidebar.module.css";

import { NavLink } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.Sidebar_content}>
        <div className={styles.Logo}>
          <h3>الوجو</h3>
        </div>
        <div className={styles.SidebarList}>
          <ul>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <li>الصحفة الرئيسية</li>
            </NavLink>
            <NavLink
              to="/s"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <li>أطباق رئيسية</li>
              <FaAngleLeft size={20} />
            </NavLink>
            <NavLink
              to="/3"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <li>مشروبات</li>
              <FaAngleLeft size={20} />
            </NavLink>
            <NavLink
              to="/d"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <li>الأراجيل</li>
              <FaAngleLeft size={20} />
            </NavLink>
            <NavLink
              to="/all-items"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <li>جميع العناصر</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
