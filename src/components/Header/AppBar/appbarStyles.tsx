import {
  AppBar as MuiAppBar,
  Toolbar as MuiToolbar,
  SvgIcon as MuiSvgIcon,
  styled,
} from "@mui/material";
import appbarLogo from "../../../assets/rca-md1.jpeg";

export const AppBarContainer = styled(MuiAppBar)(() => ({
  backgroundColor: "#faf9f9",
  ".MuiPaper-root": {
    backgroundColor: "white",
  },
}));

export const AppBarCustom = styled(MuiAppBar)(() => ({
  position: "static",
  ".MuiContainer-root": { backgroundColor: "white", maxWidth: "68%" },
  ".MuiButtonBase-root": { color: "black", fontWeight: "500" },
  ".MuiButtonBase-root:hover": { color: "green", fontWeight: "600" },
}));

export const ToolbarCustom = styled(MuiToolbar)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const SvgIconCustom = styled(MuiSvgIcon)(() => ({
  backgroundImage: `url(${appbarLogo})`,
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
  height: "75px",
  width: "150px",
  marginLeft: "-50px",
}));
