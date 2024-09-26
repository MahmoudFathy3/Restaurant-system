import { Pagination, Stack } from "@mui/material";

const Paginations = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Pagination
        count={10}
        showFirstButton
        showLastButton
        color="primary"
        sx={{ direction: "ltr", p: 1 }}
      />
    </Stack>
  );
};

export default Paginations;
