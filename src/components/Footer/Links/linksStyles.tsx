import {
  Box as MuiBox,
  Container as MuiContainer,
  Link as MuiLink,
  styled,
} from "@mui/material";
import logo from "../../../assets/rca-md1.jpeg";

export const LinksWrapper = styled(MuiContainer)(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "30px",
}));

export const LinksSection = styled(MuiBox)(() => ({
  height: "300px",
}));

export const LogoWrapper = styled(MuiBox)(() => ({
  backgroundImage: `url(${logo})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  height: "70px",
  marginBottom: "10px",
}));

export const AssuranceTypesWrapper = styled(MuiLink)(() => ({
  display: "grid",
  alignItems: "center",
  color: "black",
  height: "200px",
}));

export const ButtonsWrapper = styled(MuiBox)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));
