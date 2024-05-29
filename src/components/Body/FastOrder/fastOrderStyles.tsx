import {
  Box as MuiBox,
  Container as MuiContainer,
  TextField as MuiTextField,
  styled,
} from "@mui/material";
import fastOrderBG from "../../../assets/bg-fast-order.png";

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

export const CustomTextField = styled(MuiTextField)(() => ({}));
