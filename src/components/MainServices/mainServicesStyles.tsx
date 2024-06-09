import { Container as MuiContainer, styled } from "@mui/material";

export const MainServicesContainer = styled(MuiContainer)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {},
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  marginTop: "-100px",
}));
