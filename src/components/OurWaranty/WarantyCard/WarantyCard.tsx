import { FC } from "react";
import {
  CardContainer,
  CustomIcon,
  Description,
  Title,
} from "./warantyCardStyles";
import { ourWarantyCardTypes } from "./warantyCardTypes";
import { Box } from "@mui/material";

export const WarantyCard: FC<ourWarantyCardTypes> = ({
  icon,
  title,
  description,
}) => {
  return (
    <CardContainer>
      <CustomIcon>{icon}</CustomIcon>
      <Box>
        <Title>{title}</Title>
        <Description variant="body1">{description}</Description>
      </Box>
    </CardContainer>
  );
};
