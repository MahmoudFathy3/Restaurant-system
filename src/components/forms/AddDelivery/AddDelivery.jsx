import styles from "./AddDelivery.module.css";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import FormControls from "@components/restaurant-system/FormControl/FormControl";

const AddDelivery = ({ onSubmit, handleClose }) => {
  return (
    <div className={styles.AddDelivery}>
      <div className={styles.AddDelivery_content}>
        <Box component="form" onSubmit={onSubmit} noValidate>
          <div className={styles.form}>
            <FormControls
              label="اسم السائق"
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
              label="ID"
              id="ID"
              classes={{ formControl: styles.FormControl, input: styles.input }}
            />
            <FormControls
              label="رقم الفاتوره"
              id="invoice-number"
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

AddDelivery.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AddDelivery;
