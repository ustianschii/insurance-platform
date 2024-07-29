import {
  Card as MuiCard,
  CardMedia as MuiCardMedia,
  Button as MuiButton,
  styled,
} from "@mui/material";

export const CardContainer = styled(MuiCard)(() => ({
  position: "relative",
  minHeight: "230px",
  width: "48%",
  borderRadius: "15px",
  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
  padding: "10px",
}));

export const CardMediaContainer = styled(MuiCardMedia)(() => ({
  position: "absolute",
  bottom: "0",
  right: "0",
  height: "75%",
  width: "45%",
}));

export const CustomButton = styled(MuiButton)(() => ({
  position: "absolute",
  bottom: "20px",
  left: "20px",
  backgroundColor: "#01ad4033",
  color: "#01ad40",
}));
