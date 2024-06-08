import { FC } from "react";
import { CustomButton } from "./sendButtonStyles";
import { CustomDivider } from "../../Blog/blogStyles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { SendButtonType } from "./sendButtonTypes";

const SendButton: FC<SendButtonType> = ({ title, fullWidth }) => {
  return (
    <CustomButton variant="contained" fullWidth={fullWidth}>
      {title}
      <CustomDivider orientation="vertical" />
      <KeyboardArrowRightIcon />
    </CustomButton>
  );
};

export default SendButton;
