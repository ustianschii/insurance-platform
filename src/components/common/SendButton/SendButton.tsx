import React from "react";
import { FC } from "react";
import { CustomButton } from "./sendButtonStyles";
import { CustomDivider } from "../../Blog/blogStyles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { SendButtonType } from "./sendButtonTypes";

const SendButton: FC<SendButtonType> = ({ title }) => {
  return (
    <CustomButton variant="contained">
      {title}
      <CustomDivider orientation="vertical" flexItem />
      <KeyboardArrowRightIcon />
    </CustomButton>
  );
};

export default SendButton;
