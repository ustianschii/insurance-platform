import * as React from "react";
import { FC } from "react";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { OfferCardType } from "./offerCardTypes";
import {
  CardContainer,
  CardContentContainer,
  CustomButton,
} from "./offerCardStyles";

export const OfferCard: FC<OfferCardType> = ({ title, description, logo }) => {
  return (
    <CardContainer>
      <CardContentContainer>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          padding={"10px 0 0 10px"}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          padding={"0px 0 0 10px"}
        >
          {description}
        </Typography>
      </CardContentContainer>

      <CardMedia
        sx={{
          position: "absolute",
          bottom: "0",
          height: "110px",
          width: "160px",
          backgroundImage: `url(${logo})`,
          margin: "0 0 10px 10px",
        }}
      />
      <CardActions>
        <CustomButton variant="contained" size="small">
          Calculează preț
        </CustomButton>
      </CardActions>
    </CardContainer>
  );
};
