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
  minHeight: "230px",
  minWidth: "365px",
  maxWidth: "365px",
  borderRadius: "15px",
  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
  marginBottom: "50px",
}));

export const CardContentContainer = styled(MuiCardContent)(() => ({
  display: "block",
  minWidth: "365px",
  height: "50%",
}));

export const CardMediaContainer = styled(MuiCardMedia)(() => ({
  position: "absolute",
  bottom: "0",
  minHeight: "110px",
  minWidth: "160px",
  margin: "0 0 10px 10px",
}));

export const CustomButton = styled(MuiButton)(() => ({
  position: "absolute",
  bottom: "0",
  right: "0",
  margin: "0 20px 20px 0px",
  backgroundColor: "#01ad4033",
  color: "#01ad40",
}));
