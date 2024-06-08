import { FC } from "react";
import {
  CardContainer,
  CustomIcon,
  Description,
  TextContainer,
  Title,
} from "./warantyCardStyles";
import { ourWarantyCardTypes } from "./warantyCardTypes";

export const WarantyCard: FC<ourWarantyCardTypes> = ({
  icon,
  title,
  description,
}) => {
  return (
    <CardContainer>
      <CustomIcon>{icon}</CustomIcon>
      <TextContainer>
        <Title variant="body1">{title}</Title>
        <Description variant="body1">{description}</Description>
      </TextContainer>
    </CardContainer>
  );
};
