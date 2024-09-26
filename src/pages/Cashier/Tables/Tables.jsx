import { useEffect, useState } from "react";
import styles from "./Tables.module.css";
import { Link } from "react-router-dom";
import { Box, Drawer, IconButton } from "@mui/material";
import { IoMdArrowRoundBack } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import Menu from "@components/common/Menu/Menu";
import Sidebar from "@components/common/Sidebar/Sidebar";
import TablesMerge from "@components/restaurant-system/TablesMerge/TablesMerge";
import Modals from "@components/restaurant-system/Modal/Modal";
import FormControls from "@components/restaurant-system/FormControl/FormControl";
import image from "@assets/image/table.png";
import image2 from "@assets/image/table(3).png";
import image3 from "@assets/image/table(4).png";

const Tables = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openMerge, setOpenMerge] = useState(false);
  const [tables, setTables] = useState([
    {
      id: 1,
      title: "طاولات فرديه",
      item: [
        { id: 1, table: "طاولة 116", image: image, seleted: true },
        { id: 2, table: "طاولة 117", image: image },
        { id: 3, table: "طاولة 118", image: image },
        { id: 4, table: "طاولة 119", image: image, seleted: true },
        { id: 5, table: "طاولة 120", image: image, seleted: true },
        { id: 6, table: "طاولة 121", image: image },
      ],
    },
    {
      id: 2,
      title: "طاولات عائلية",
      item: [
        { id: 1, table: "طاولة 111", image: image2 },
        { id: 2, table: "طاولة 112", image: image2, seleted: true },
        { id: 3, table: "طاولة 113", image: image2, seleted: true },
        { id: 4, table: "طاولة 114", image: image2, seleted: true },
        { id: 5, table: "طاولة 115", image: image2 },
      ],
    },
    {
      id: 3,
      title: "طاولات عزائم",
      item: [
        { id: 1, table: "طاولة 133", image: image3 },
        { id: 2, table: "طاولة 134", image: image3 },
        { id: 3, table: "طاولة 135", image: image3, seleted: true },
        { id: 4, table: "طاولة 136", image: image3 },
        { id: 5, table: "طاولة 137", image: image3 },
        { id: 6, table: "طاولة 138", image: image3, seleted: true },
      ],
    },
  ]);
  const [lengthTable, setLengthTable] = useState(0);
  const [user, setUser] = useState("waiter");

  // Collect the number of tables
  useEffect(() => {
    let count = 0;
    tables.map((table) => {
      setLengthTable((count += Number(table.item.length)));
    });
  }, [tables]);

  // submit Merge table
  const onSubmitMergeTable = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      tableone: data.get("table"),
      otherTable: data.get("otherTable"),
    });
  };

  return (
    <div className={styles.tables}>
      {user === "cashier" && <Sidebar />}
      <div
        className={[
          `${styles.tablerMarge} ${user === "cashier" ? styles.cashier : ""}`,
        ]}
      >
        <header className={styles.tablerMarge_header}>
          <div className={styles.tablerMarge_Length}>
            <h3>عدد الطاولات : </h3>
            <span>{lengthTable}</span>
          </div>
          <div className={styles.tablerMarge_Merge}>
            <button
              className={styles.button}
              onClick={() => setOpenMerge(true)}
            >
              دمج الطاولة
            </button>
            {user === "waiter" && (
              <Link to={"/"}>
                <IconButton>
                  <IoMdArrowRoundBack size={30} />
                </IconButton>
              </Link>
            )}

            {user === "cashier" && (
              <>
                <IconButton onClick={() => setOpenMenu(true)}>
                  <BiMenuAltLeft size={50} />
                </IconButton>
                <Drawer open={openMenu} onClose={() => setOpenMenu(false)}>
                  <Menu handlerClose={() => setOpenMenu(false)} />
                </Drawer>
              </>
            )}
          </div>
        </header>

        <TablesMerge tables={tables} />

        {/* Merge Table */}
        <Modals open={openMerge} handleClose={() => setOpenMerge(false)}>
          <div className={styles.MergeInputs}>
            <Box component="form" onSubmit={onSubmitMergeTable}>
              <div className={styles.form}>
                <FormControls
                  id="table"
                  label="دمج طاولة رقم"
                  type="number"
                  classes={{
                    formControl: styles.FormControl,
                    input: styles.input,
                  }}
                />
                <FormControls
                  id="otherTable"
                  label="الي طاولة رقم"
                  type="number"
                  classes={{
                    formControl: styles.FormControl,
                    input: styles.input,
                  }}
                />
              </div>
              <div className={styles.Buttons}>
                <button>اضافة</button>
                <button onClick={() => setOpenMerge(false)}>الغاء</button>
              </div>
            </Box>
          </div>
        </Modals>
      </div>
    </div>
  );
};

export default Tables;
