import * as React from "react";
import { FC } from "react";
import Typography from "@mui/material/Typography";
import { OfferCardType } from "./offerCardTypes";
import {
  CardContainer,
  CardContentContainer,
  CardMediaContainer,
  CustomButton,
} from "./offerCardStyles";
import CardMedia from "@mui/material/CardMedia";
import badge from "../../../assets/bg-bidge.png";
import { Box } from "@mui/material";

export const OfferCard: FC<OfferCardType> = ({ title, description, logo }) => {
  return (
    <CardContainer>
      <CardContentContainer>
        <CardMedia
          image={badge}
          sx={{
            display: "block",
            position: "absolute",
            height: "75px",
            width: "75px",
            right: "30px",
            top: "-20px",
          }}
        >
          <Box sx={{ padding: "20px 0 0 0px" }}>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "12px",
                paddingLeft: "28px",
              }}
            >
              de la
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "12px",
                paddingLeft: "32px",
              }}
            >
              200
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "12px",
                paddingLeft: "35px",
              }}
            >
              lei
            </Typography>
          </Box>
        </CardMedia>
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
      <CardMediaContainer image={logo} />
      <CustomButton variant="contained" size="small">
        Calculează preț
      </CustomButton>
    </CardContainer>
  );
};
