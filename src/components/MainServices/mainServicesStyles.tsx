import {
  Container as MuiContainer,
  Box as MuiBox,
  styled,
} from "@mui/material";

export const MainServicesContainer = styled(MuiContainer)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginBottom: "50px",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("xl")]: {},
  flexWrap: "wrap",
  marginTop: "-100px",
  marginBottom: "100px",
}));

export const SmallOfferCards = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("xl")]: {},
  display: "flex",
  justifyContent: "space-between",
}));

export const BigOfferCars = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("xl")]: {},
  display: "flex",
}));
