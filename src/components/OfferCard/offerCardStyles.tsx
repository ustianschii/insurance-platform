import {
  Card as MuiCard,
  CardMedia as MuiCardMedia,
  Button as MuiButton,
  styled,
} from "@mui/material";

export const CardContainer = styled(MuiCard)(() => ({
  position: "relative",
  minHeight: "230px",
  minWidth: "31%",
  maxWidth: "370px",
  borderRadius: "15px",
  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
  padding: "10px",
}));

export const CardMediaContainer = styled(MuiCardMedia)(() => ({
  position: "absolute",
  bottom: "10px",
  left: "10px",
  minHeight: "45%",
  minWidth: "45%",
}));

export const CustomButton = styled(MuiButton)(() => ({
  position: "absolute",
  bottom: "20px",
  right: "20px",
  backgroundColor: "#01ad4033",
  color: "#01ad40",
}));
