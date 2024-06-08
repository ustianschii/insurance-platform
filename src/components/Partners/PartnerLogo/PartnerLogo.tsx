import { FC } from "react";
import { PartnerLogoType } from "./partnerLogoTypes";
import { LogoWrapper } from "./partnerLogoWrapperStyles";

const PartnerLogo: FC<PartnerLogoType> = ({ logo }) => {
  return <LogoWrapper logo={logo} />;
};

export default PartnerLogo;
