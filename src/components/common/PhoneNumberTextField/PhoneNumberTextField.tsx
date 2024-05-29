import React from "react";
import { TextField } from "@mui/material";

const PhoneNumberTextField = () => {
  return (
    <TextField
      size="small"
      id="outlined-basic"
      label="Numărul de telefon"
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

export default PhoneNumberTextField;
