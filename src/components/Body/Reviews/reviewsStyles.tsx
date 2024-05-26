import {
  Container as MuiContainer,
  Box as MuiBox,
  styled,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import reviewsBlockBG from "../../../assets/bg-reviews-block2.png";
import reviewsBlockBgRight from "../../../assets/reviews-block-bg.jpeg";

export const ReviewsWrapper = styled(MuiContainer)(() => ({
  display: "flex",
  height: "550px",
  backgroundColor: "#d0d4e05c",
  backgroundImage: `url(${reviewsBlockBG})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  borderRadius: "15px",
}));

export const QuoteIcon = styled(FormatQuoteIcon)(() => ({
  height: "45px",
  width: "45px",
  color: "white",
  marginRight: "25px",
  backgroundColor: "#01ad40",
  borderRadius: "5px",
}));

export const ReviewsBgRightWrapper = styled(MuiBox)(() => ({
  width: "600px",
  backgroundImage: `url(${reviewsBlockBgRight})`,
  margin: "-10px 0 0 -60px",
}));

export const AvatarSmall = styled(MuiBox)(() => ({
  position: "relative",
  backgroundSize: "cover",
  height: "45px",
  width: "45px",
  borderRadius: "20px",
}));

export const AvatarBig = styled(MuiBox)(() => ({
  position: "relative",
  backgroundSize: "cover",
  height: "65px",
  width: "65px",
  borderRadius: "30px",
}));
