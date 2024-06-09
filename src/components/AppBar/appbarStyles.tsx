import {
  AppBar as MuiAppBar,
  SvgIcon as MuiSvgIcon,
  Box as MuiBox,
  Button as MuiButton,
  Container as MuiContainer,
  styled,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import appbarLogo from "../../assets/rca-md1.jpeg";

export const AppBarCustom = styled(MuiAppBar)(() => ({
  backgroundColor: "white",
  position: "static",
  ".MuiContainer-root": { backgroundColor: "#ffffff", maxWidth: "100%" },
  ".MuiButtonBase-root": {
    fontSize: "15px",
    fontWeight: "500",
  },
}));

export const NavContainer = styled(MuiContainer)(() => ({
  display: "flex",
  justifyContent: "center",
  maxWidth: "70%",
}));

export const AppBarLogo = styled(MuiSvgIcon)(() => ({
  backgroundImage: `url(${appbarLogo})`,
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
  height: "75px",
  width: "150px",
  marginLeft: "-50px",
}));

export const AppBarLinks = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    display: "flex",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  whiteSpace: "nowrap",
}));

export const PhoneIcon = styled(LocalPhoneIcon)(() => ({
  fontSize: "24px",
  color: "#fa7327",
}));

export const CallContainer = styled(MuiBox)(({ theme }) => ({
  color: "#fa7327",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

export const LoginButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: "#01ad40",
  borderRadius: "5px",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));
