import { Box as MuiBox, styled } from "@mui/material";
import { PartnerLogoType } from "./partnerLogoTypes";

export const LogoWrapper = styled(MuiBox)<PartnerLogoType>(({ logo }) => ({
  backgroundImage: `url(${logo})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  height: "40px",
  width: "130px",
}));
