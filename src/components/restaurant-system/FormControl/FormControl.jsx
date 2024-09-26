import { FormControl, FormLabel, TextField } from "@mui/material";
import PropTypes from "prop-types";

const FormControls = ({ classes, id, label, type }) => {
  return (
    <FormControl className={classes?.formControl}>
      <FormLabel htmlFor={id} sx={{ fontFamily: "var(--font-family)" }}>
        {label}
      </FormLabel>
      <TextField
        id={id}
        name={id}
        type={type || "text"}
        fullWidth
        variant="outlined"
        required
        className={classes?.input}
      />
    </FormControl>
  );
};

FormControls.propTypes = {
  classes: PropTypes.object,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormControls;
