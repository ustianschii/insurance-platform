import React from "react";
import { TextField } from "@mui/material";

const NameTextField = () => {
  return (
    <TextField
      size="small"
      id="outlined-basic"
      label="Introdu numele tău"
      variant="filled"
      InputLabelProps={{
        style: { color: "gray" },
      }}
      sx={{
        backgroundColor: "white",
        borderRadius: "8px",
        ".MuiInputBase-root::after": {
          border: "1px solid #01ad40",
        },
      }}
    />
  );
};

export default NameTextField;
