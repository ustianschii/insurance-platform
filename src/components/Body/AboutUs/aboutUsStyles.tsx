import {
  Box as MuiBox,
  Container as MuiContainer,
  Button as MuiButton,
  styled,
} from "@mui/material";
import aboutUsLogo from "../../../assets/family.jpeg";

export const AboutUs = styled(MuiContainer)(() => ({
  display: "flex",
  position: "relative",
  height: "450px",
  marginBottom: "100px",
}));

export const CustomButton = styled(MuiButton)(() => ({
  margin: "46px 0 0 0",
  backgroundColor: "#01ad40",
}));

export const AboutUsImgBox = styled(MuiBox)(() => ({
  width: "60%",
  height: "100%",
  borderRadius: "15px",
  backgroundImage: `url(${aboutUsLogo})`,
}));
