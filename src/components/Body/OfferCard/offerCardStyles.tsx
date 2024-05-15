import { Card as MuiCard, styled } from "@mui/material";
import cardLogo from "../../../assets/cardLogo.jpeg";

export const OfferCardWrapper = styled(MuiCard)(() => ({
  width: "350px",
  maxHeight: "300px",
  backgroundImage: `url(${cardLogo})`,
  backgroundRepeat: "no-repeat",
  backgroundPositionY: "-30%",
  borderRadius: "15px",
  marginY: "10px",
  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
}));
