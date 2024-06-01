import { TextField as MuiTextField, styled } from "@mui/material";

export const CustomTextField = styled(MuiTextField)(() => ({
  ".MuiOutlinedInput-root": {
    backgroundColor: "white",
    borderRadius: "8px",
  },
}));
