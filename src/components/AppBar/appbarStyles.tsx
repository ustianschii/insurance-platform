import {
  AppBar as MuiAppBar,
  SvgIcon as MuiSvgIcon,
  styled,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import appbarLogo from "../../assets/rca-md1.jpeg";

export const AppBarContainer = styled(MuiAppBar)(() => ({
  backgroundColor: "#faf9f9",
  ".MuiPaper-root": {
    backgroundColor: "white",
  },
}));

export const AppBarCustom = styled(MuiAppBar)(() => ({
  position: "static",
  ".MuiContainer-root": { backgroundColor: "white", maxWidth: "68%" },
  ".MuiButtonBase-root": {
    color: "black",
    fontSize: "15px",
    fontWeight: "500",
  },
  ".MuiButtonBase-root:hover": { color: "green", fontSize: "17px" },
}));

export const AppBarLogo = styled(MuiSvgIcon)(() => ({
  backgroundImage: `url(${appbarLogo})`,
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
  height: "75px",
  width: "150px",
  marginLeft: "-50px",
}));

export const PhoneIcon = styled(LocalPhoneIcon)(() => ({
  fontSize: "24px",
  color: "#fa7327",
}));
