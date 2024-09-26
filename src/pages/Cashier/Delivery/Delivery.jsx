import styles from "./Delivery.module.css";
import Table from "@src/components/restaurant-system/Table/Table";
import { Button, Drawer, IconButton } from "@mui/material";
import Modals from "@src/components/restaurant-system/Modal/Modal";
import AddDelivery from "@src/components/forms/AddDelivery/AddDelivery";
import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import Menu from "@src/components/common/Menu/Menu";
import { Link } from "react-router-dom";
import { columnDelivery } from "@src/shared/columnsTable";
import Paginations from "@src/components/restaurant-system/Pagination/Pagination";

const Delivery = () => {
  const [addDelivery, setAddDelivery] = useState(false);
  const [open, setOpen] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    console.log(data.get("phone"));
  };

  return (
    <div className={styles.Delivery}>
      <div className={styles.Delivery_content}>
        {/* Header Delivery */}
        <header className={styles.header}>
          <div className={styles.header_content}>
            <h3>الدليفري</h3>
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
          <button onClick={() => setAddDelivery(true)}>
            اضافة سائق دليفري
          </button>
        </div>
        {/* Table Delivery */}
        <div className={styles.table}>
          <Table column={columnDelivery}>
            <tr>
              <td>s</td>
            </tr>
          </Table>
          <Paginations />
        </div>

        <div className={styles.goBack}>
          <Link to={"/"}>
            <Button variant="contained">العوده</Button>
          </Link>
        </div>

        {/* Modal for Delivery  */}
        <Modals open={addDelivery} handleClose={() => setAddDelivery(false)}>
          <AddDelivery
            onSubmit={onSubmit}
            handleClose={() => setAddDelivery(false)}
          />
        </Modals>
      </div>
    </div>
  );
};

export default Delivery;
