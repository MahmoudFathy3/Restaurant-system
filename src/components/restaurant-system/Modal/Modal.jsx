import styles from "./Modal.module.css";
import PropTypes from "prop-types";
import { IconButton, Modal } from "@mui/material";
import { IoClose } from "react-icons/io5";

const Modals = ({ children, open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className={styles.Modal}
    >
      <div className={styles.Modal_content}>
        <div className={styles.closeModal}>
          <IconButton className={styles.close} onClick={handleClose}>
            <IoClose />
          </IconButton>
        </div>
        {children}
      </div>
    </Modal>
  );
};

Modals.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modals;
