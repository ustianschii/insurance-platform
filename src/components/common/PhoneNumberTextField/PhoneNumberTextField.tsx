import React, { FC } from "react";
import { CustomTextField } from "./phoneNumberTextFieldStyles";
import { PhoneNumberTextFieldTypes } from "./phoneNumberTextFieldTypes";

const PhoneNumberTextField: FC<PhoneNumberTextFieldTypes> = ({ fullWidth }) => {
  return (
    <CustomTextField
      type="tel"
      size="small"
      fullWidth={fullWidth}
      label="+373"
      variant="outlined"
      InputLabelProps={{
        style: { color: "gray" },
      }}
    />
  );
};

export default PhoneNumberTextField;
