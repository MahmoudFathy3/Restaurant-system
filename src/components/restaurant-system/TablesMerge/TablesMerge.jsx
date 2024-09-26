import styles from "./TablesMerge.module.css";
import { Checkbox, Radio } from "@mui/material";
import PropTypes from "prop-types";

const TablesMerge = ({ tables }) => {
  return (
    <div className={styles.Tables}>
      <div className={styles.Tables_content}>
        {/* List Tables */}
        <div className={styles.ListTables}>
          {tables.map((table) => (
            <div key={table.id} className={styles.Tables_Table}>
              <div className={styles.table_title}>
                <h3>{`${table.title} (${table.item.length})`}</h3>
              </div>
              <div className={styles.table_item}>
                {table.item.map((item) => (
                  <div key={item.id} className={styles.table_item_table}>
                    <img src={item.image} alt="table" />
                    <div>
                      <h3>{`${item.table}`}</h3>

                      <Checkbox
                        defaultChecked={item.seleted}
                        color="success"
                        onChange={(e) =>
                          console.log({
                            name: item.table,
                            seleted: e.target.checked,
                          })
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

TablesMerge.propTypes = {
  tables: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TablesMerge;
