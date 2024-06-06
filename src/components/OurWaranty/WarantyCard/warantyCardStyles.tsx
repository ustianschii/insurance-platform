import {
  Box as MuiBox,
  SvgIcon as MuiSvgIcon,
  Typography as MuiTypography,
  styled,
} from "@mui/material";

export const CardContainer = styled(MuiBox)(() => ({
  display: "flex",
  height: "50%",
  width: "33%",
  padding: "20px",
  marginBottom: "20px",
}));

export const CustomIcon = styled(MuiSvgIcon)(() => ({
  height: "70px",
  width: "65px",
  marginRight: "10px",
  color: "#00cd4a",
}));

export const TextContainer = styled(MuiBox)(() => ({
  textWrap: "wrap",
}));

export const Title = styled(MuiTypography)(() => ({
  color: "white",
  height: "30%",
  fontWeight: "bold",
  fontSize: "20px",
}));

export const Description = styled(MuiTypography)(() => ({
  color: "white",
  textWrap: "wrap",
  fontSize: "15px",
}));
