import { Container as MuiContainer, styled } from "@mui/material";

export const MainServicesContainer = styled(MuiContainer)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {},
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  height: "650px",
  marginTop: "-100px",
  marginBottom: "-50px",
}));
