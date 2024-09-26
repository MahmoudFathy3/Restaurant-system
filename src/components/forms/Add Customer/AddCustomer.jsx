import styles from "./AddCustomer.module.css";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import FormControls from "@components/restaurant-system/FormControl/FormControl";

const AddCustomer = ({ onSubmit, handleClose }) => {
  return (
    <div className={styles.AddCustomer}>
      <div className={styles.AddCustomer_content}>
        <Box component="form" onSubmit={onSubmit}>
          <div className={styles.form}>
            <FormControls
              label="اسم العميل"
              id="name"
              classes={{ formControl: styles.FormControl, input: styles.input }}
            />
            <FormControls
              label="رقم الهاتف"
              id="phone"
              type="tel"
              classes={{ formControl: styles.FormControl, input: styles.input }}
            />
            <FormControls
              label="رقم هاتف أخر"
              id="otherPhone"
              type="tel"
              classes={{ formControl: styles.FormControl, input: styles.input }}
            />
            <FormControls
              label="رقم الفاتوره"
              id="invoice-number"
              type="number"
              classes={{ formControl: styles.FormControl, input: styles.input }}
            />
            <FormControls
              label="العنوان"
              id="Address"
              classes={{ formControl: styles.FormControl, input: styles.input }}
            />
            <FormControls
              label="التوصيل"
              id="delivery"
              type="number"
              classes={{ formControl: styles.FormControl, input: styles.input }}
            />
          </div>
          <div className={styles.Buttons}>
            <button>اضافة</button>
            <button onClick={handleClose}>الغاء</button>
          </div>
        </Box>
      </div>
    </div>
  );
};

AddCustomer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AddCustomer;
