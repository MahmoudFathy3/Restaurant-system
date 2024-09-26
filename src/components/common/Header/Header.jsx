import { Button, Drawer, IconButton } from "@mui/material";
import styles from "./Header.module.css";
import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import Menu from "../Menu/Menu";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <Button className={styles.button}>الخزنة</Button>
        <IconButton onClick={() => setOpen(true)}>
          <BiMenuAltLeft className={styles.icon} />
        </IconButton>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <Menu handlerClose={() => setOpen(false)} />
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
