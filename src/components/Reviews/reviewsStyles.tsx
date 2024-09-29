import {
  Container as MuiContainer,
  Box as MuiBox,
  Typography as MuiTypography,
  styled,
} from "@mui/material";
import reviewsBlockBG from "../../assets/bg-reviews-block2.png";
import reviewsBlockBgRight from "../../assets/reviews-block-bg.jpeg";

export const ReviewsWrapper = styled(MuiContainer)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
  display: "flex",
  backgroundColor: "#d0d4e05c",
  backgroundImage: `url(${reviewsBlockBG})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  borderRadius: "15px",
  marginBottom: "100px",
  paddingTop: "20px",
  // minWidth: "600px",
}));

export const ReviewsLeftBlock = styled(MuiContainer)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("xl")]: {
    padding: " 20px 20px 20px 0",
    textAlign: "center",
  },
  [theme.breakpoints.up("xl")]: {
    width: "60%",
    padding: " 20px 0 20px 20px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    fontSize: "30px",
    marginBottom: "25px",
  },
  [theme.breakpoints.down("xl")]: {},
  marginBottom: "70px",
}));

export const ReviewsBgRightBlock = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.down("lg")]: {
    backgroundSize: "cover",
  },
  backgroundImage: `url(${reviewsBlockBgRight})`,
  backgroundSize: "cover",
  borderEndEndRadius: "15px",
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
