import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  Button as MuiButton,
  styled,
} from "@mui/material";

export const CardContainer = styled(MuiCard)(() => ({
  display: "flex",
  position: "relative",
  height: "230px",
  width: "560px",
  marginTop: "-120px",
  borderRadius: "15px",
  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
}));

export const CardContentContainer = styled(MuiCardContent)(() => ({
  display: "block",
  width: "100%",
  height: "50%",
}));

export const CardMediaContainer = styled(MuiCardMedia)(() => ({
  position: "absolute",
  bottom: "0",
  right: "0",
  height: "170px",
  width: "270px",
  margin: "0 -10px 0 0",
}));

export const CustomButton = styled(MuiButton)(() => ({
  position: "absolute",
  bottom: "0",
  left: "0",
  margin: "0 0px 20px 20px",
  backgroundColor: "#01ad4033",
  color: "#01ad40",
}));
