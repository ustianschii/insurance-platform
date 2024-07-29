import {
  Box as MuiBox,
  Container as MuiContainer,
  Button as MuiButton,
  styled,
} from "@mui/material";
import aboutUsLogo from "../../assets/family.jpeg";

export const AboutUsWrapper = styled(MuiContainer)(() => ({
  display: "flex",
  height: "450px",
  marginBottom: "100px",
}));

export const CustomButton = styled(MuiButton)(() => ({
  backgroundColor: "#01ad40",
  position: "relative",
  top: "70px",
}));

export const AboutUsImgBox = styled(MuiBox)(() => ({
  width: "60%",
  borderRadius: "15px",
  backgroundImage: `url(${aboutUsLogo})`,
}));
