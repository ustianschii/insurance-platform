import * as React from "react";
import { FC } from "react";
import Typography from "@mui/material/Typography";
import {
  CardContainer,
  CardContentContainer,
  CardMediaContainer,
  CustomButton,
} from "./offerCardBigStyles";
import { OfferCardBigTypes } from "./offerCardBigTypes";
import { CustomBadge } from "../common/Badge/CustomBadge";

export const OfferCardBig: FC<OfferCardBigTypes> = ({
  title,
  description,
  logo,
  badgeTitle,
  badgePrice,
  badgeCurrency,
}) => {
  return (
    <CardContainer>
      <CardContentContainer>
        <CustomBadge
          badgeTitle={badgeTitle}
          badgePrice={badgePrice}
          badgeCurrency={badgeCurrency}
        ></CustomBadge>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          padding={"10px 0 0 10px"}
          marginBottom={"10px"}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          padding={"0px 0 0 10px"}
          maxWidth={"55%"}
        >
          {description}
        </Typography>
      </CardContentContainer>

      <CardMediaContainer image={logo} />
      <CustomButton variant="contained" size="small">
        Calculează preț
      </CustomButton>
    </CardContainer>
  );
};
