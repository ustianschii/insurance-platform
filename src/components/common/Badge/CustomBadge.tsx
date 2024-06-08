import { FC } from "react";
import { Box } from "@mui/material";
import badge from "../../../assets/bg-bidge.png";
import { CardMediaContainer, CustomTypography } from "./customBadgeStyles";
import { CustomBadgeTypes } from "./customBadgeTypes";

export const CustomBadge: FC<CustomBadgeTypes> = ({
  badgeTitle,
  badgePrice,
  badgeCurrency,
}) => {
  return (
    <CardMediaContainer image={badge}>
      <Box padding={"20px 0 0 10px"} textAlign={"center"}>
        <CustomTypography variant="body1">{badgeTitle}</CustomTypography>
        <CustomTypography variant="body1">{badgePrice}</CustomTypography>
        <CustomTypography variant="body1">{badgeCurrency}</CustomTypography>
      </Box>
    </CardMediaContainer>
  );
};
