import {
  Box as MuiBox,
  Container as MuiContainer,
  styled,
} from "@mui/material";
import logo from "../../assets/body-image.jpeg";

export const MainWrapper = styled(MuiBox)(() => ({
  maxWidth: "100%",
}));

export const WalppaperContainer = styled(MuiBox)(() => ({
  backgroundImage: `url(${logo})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "500px",
  width: "100%",
}));
export const WallpaperTextContainer = styled(MuiBox)(() => ({
  display: "block",
  paddingLeft: "20%",
  paddingTop: "5%",
  color: "white",
}));

export const AboutUsContainer = styled(MuiContainer)(() => ({
  display: "flex",
  position: "relative",
  height: "450px",
}));
