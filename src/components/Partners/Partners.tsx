import PartnerLogo from "./PartnerLogo/PartnerLogo";
import moldcargo from "../../assets/moldcargo.webp";
import transelit from "../../assets/transelit.webp";
import donaris from "../../assets/donaris.webp";
import moldasig from "../../assets/moldasig.webp";
import asterra from "../../assets/asterra.webp";
import grawe from "../../assets/grawecarat.webp";
import acordgrup from "../../assets/acordgrup.webp";
import { PartnersContainer } from "./partnersStyles";

const Partners = () => {
  return (
    <PartnersContainer disableGutters>
      <PartnerLogo logo={moldcargo} />
      <PartnerLogo logo={transelit} />
      <PartnerLogo logo={donaris} />
      <PartnerLogo logo={moldasig} />
      <PartnerLogo logo={asterra} />
      <PartnerLogo logo={grawe} />
      <PartnerLogo logo={acordgrup} />
    </PartnersContainer>
  );
};

export default Partners;
