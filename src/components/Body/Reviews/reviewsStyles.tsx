import { Container as MuiContainer, styled } from "@mui/material";
import reviewsBlockBG from "../../../assets/bg-reviews-block2.png";

export const ReviewsWrapper = styled(MuiContainer)(() => ({
  display: "flex",
  height: "550px",
  backgroundColor: "#d0d4e05c",
  backgroundImage: `url(${reviewsBlockBG})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  borderRadius: "15px",
}));
