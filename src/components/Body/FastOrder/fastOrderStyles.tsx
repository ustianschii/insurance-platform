import {
  Box as MuiBox,
  Container as MuiContainer,
  styled,
} from "@mui/material";
import fastOrderBG from "../../../assets/bg-fast-order.png";
import fastOrderCarLogo from "../../../assets/fastOrder-car-logo.webp";

export const FastOrderWrapper = styled(MuiContainer)(() => ({
  display: "flex",
  height: "280px",
  backgroundColor: "#1d2750",
  backgroundImage: `url(${fastOrderBG})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  borderRadius: "15px",
  marginBottom: "100px",
}));

export const FastOrderLogo = styled(MuiBox)(() => ({
  backgroundImage: `url(${fastOrderCarLogo})`,
  height: "350px",
  width: "550px",
  backgroundSize: "cover",
  marginTop: "-15px",
}));
