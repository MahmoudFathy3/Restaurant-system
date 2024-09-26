import styles from "./Customers.module.css";
import Table from "@src/components/restaurant-system/Table/Table";
import { Button, Drawer, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import Menu from "@src/components/common/Menu/Menu";
import { BiMenuAltLeft } from "react-icons/bi";
import { useState } from "react";
import { columnCustomers } from "@src/shared/columnsTable";
import Paginations from "@src/components/restaurant-system/Pagination/Pagination";

const Customers = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.Customers}>
      <div className={styles.Customer_content}>
        {/* Header Customers */}
        <header className={styles.header}>
          <div className={styles.header_content}>
            <h3>تقرير طلبات العملاء</h3>
            <div className={styles.icon_container}>
              <IconButton onClick={() => setOpen(true)}>
                <BiMenuAltLeft size={50} />
              </IconButton>
              <Drawer open={open} onClose={() => setOpen(false)}>
                <Menu handlerClose={() => setOpen(false)} />
              </Drawer>
            </div>
          </div>
        </header>

        <div className={styles.pathname}>
          <input type="search" placeholder="بحث" />
        </div>

        {/* Table Delivery */}
        <div className={styles.table}>
          <Table column={columnCustomers}>
            <tr>
              <td>sda</td>
            </tr>
          </Table>
          <Paginations />
        </div>

        <div className={styles.goBack}>
          <Link to={"/"}>
            <Button variant="contained">العوده</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Customers;
