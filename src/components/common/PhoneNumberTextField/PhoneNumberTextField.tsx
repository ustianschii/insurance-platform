import React from "react";
import { CustomTextField } from "./phoneNumberTextFieldStyles";

const PhoneNumberTextField = () => {
  return (
    <CustomTextField
      type="tel"
      size="small"
      label="Numărul de telefon"
      variant="outlined"
      InputLabelProps={{
        style: { color: "gray" },
      }}
    />
  );
};

export default PhoneNumberTextField;
