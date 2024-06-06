import {
  Box as MuiBox,
  Container as MuiContainer,
  styled,
} from "@mui/material";
import visa from "../../assets/visa.svg";
import mastercard from "../../assets/mastercard.svg";

export const CopyrightWrapper = styled(MuiContainer)(() => ({
  display: "flex",
  height: "50px",
  marginTop: "20px",
}));
export const VisaLogo = styled(MuiBox)(() => ({
  backgroundImage: `url(${visa})`,
  height: "30px",
  width: "40px",
  marginRight: "10px",
}));
export const MasterCardLogo = styled(MuiBox)(() => ({
  backgroundImage: `url(${mastercard})`,
  height: "30px",
  width: "40px",
  marginRight: "20px",
}));
