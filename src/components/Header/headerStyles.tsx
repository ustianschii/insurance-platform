import {
  AppBar as MuiAppBar,
  Toolbar as MuiToolbar,
  SvgIcon as MuiSvgIcon,
  styled,
} from "@mui/material";
import appbarLogo from "../../assets/rca-md1.jpeg";

export const AppBarContainer = styled(MuiAppBar)(() => ({
  ".MuiPaper-root": {
    backgroundColor: "white",
  },
}));

export const AppBarCustom = styled(MuiAppBar)(() => ({
  position: "static",
  ".MuiContainer-root": { backgroundColor: "white", maxWidth: "75%" },
  ".MuiButtonBase-root": { color: "black", fontWeight: "500" },
  ".MuiButtonBase-root:hover": { color: "green", fontWeight: "bold" },
}));

export const ToolbarCustom = styled(MuiToolbar)(() => ({
  ".MuiToolbar-root": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const SvgIconCustom = styled(MuiSvgIcon)(() => ({
  backgroundImage: `url(${appbarLogo})`,
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
  height: "75px",
  width: "150px",
}));
