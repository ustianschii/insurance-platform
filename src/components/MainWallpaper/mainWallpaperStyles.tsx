import {
  Box as MuiBox,
  Typography as MuiTypography,
  styled,
} from "@mui/material";
import logo from "../../assets/body-image.jpeg";

export const WalppaperContainer = styled(MuiBox)(() => ({
  backgroundImage: `url(${logo})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "500px",
  width: "100%",
}));

export const TextContainer = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
    paddingLeft: "10%",
  },
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "5%",
    // textAlign: "center",
  },
  [theme.breakpoints.down("md")]: {
    // paddingLeft: "5%",
    textAlign: "center",
    width: "95%",
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    // paddingRight: "5%",
    width: "90%",
  },
  display: "block",
  paddingLeft: "18%",
  paddingTop: "5%",
  color: "white",
}));

export const ShortDescription = styled(MuiTypography)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
    // paddingLeft: "10%",
  },
  [theme.breakpoints.down("lg")]: {
    // paddingLeft: "5%",
    // textAlign: "center",
    width: "50%",
  },
  [theme.breakpoints.down("md")]: {
    // paddingLeft: "5%",
    textAlign: "center",
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    // paddingRight: "5%",
  },
  display: "block",
  width: "45%",
  // paddingLeft: "20%",
  // paddingTop: "5%",
  color: "white",
  fontSize: "17px",
  marginTop: "30px",
}));
