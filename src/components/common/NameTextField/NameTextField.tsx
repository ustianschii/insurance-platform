import React, { FC } from "react";
import { CustomTextField } from "./nameTextFieldStyles";
import { NameTextFieldTypes } from "./nameTextFieldTypes";

const NameTextField: FC<NameTextFieldTypes> = ({ fullWidth, label, width }) => {
  return (
    <CustomTextField
      size="small"
      id="outlined-basic"
      fullWidth={fullWidth}
      label={label}
      variant="outlined"
      InputLabelProps={{
        style: { color: "gray" },
      }}
      sx={{ width: `${width}px` }}
    />
  );
};

export default NameTextField;
