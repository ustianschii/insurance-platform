import {
  CardMedia as MuiCardMedia,
  Typography as MuiTypography,
  styled,
} from "@mui/material";

export const CardMediaContainer = styled(MuiCardMedia)(() => ({
  display: "block",
  position: "absolute",
  height: "75px",
  width: "75px",
  right: "30px",
  top: "-20px",
}));

export const CustomTypography = styled(MuiTypography)(() => ({
  color: "white",
  fontWeight: "bold",
  fontSize: "12px",
}));
