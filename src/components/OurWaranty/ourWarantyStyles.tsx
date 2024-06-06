import {
  Box as MuiBox,
  Container as MuiContainer,
  styled,
} from "@mui/material";
import ourWarantyBlockBG from "../../assets/bg-our-waranty.png";

export const OurWarantyWrapper = styled(MuiContainer)(() => ({
  height: "550px",
  backgroundColor: "#1d2750",
  backgroundImage: `url(${ourWarantyBlockBG})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  borderRadius: "15px",
  marginBottom: "100px",
}));

export const CardsContainer = styled(MuiBox)(() => ({
  display: "flex",
  flexWrap: "wrap",
  height: "320px",
}));
