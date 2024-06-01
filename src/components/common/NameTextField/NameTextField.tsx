import React from "react";
import { CustomTextField } from "./nameTextFieldStyles";

const NameTextField = () => {
  return (
    <CustomTextField
      size="small"
      id="outlined-basic"
      label="Introdu numele tău"
      variant="outlined"
      InputLabelProps={{
        style: { color: "gray" },
      }}
    />
  );
};

export default NameTextField;
