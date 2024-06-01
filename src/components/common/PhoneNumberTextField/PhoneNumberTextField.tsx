import React from "react";
import { CustomTextField } from "./phoneNumberTextFieldStyles";

const PhoneNumberTextField = () => {
  return (
    <CustomTextField
      size="small"
      id="outlined-basic"
      label="Numărul de telefon"
      variant="outlined"
      InputLabelProps={{
        style: { color: "gray" },
      }}
    />
  );
};

export default PhoneNumberTextField;
