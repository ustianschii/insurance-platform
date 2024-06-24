import { Box, Typography } from "@mui/material";
import {
  CustomButton,
  AboutUsImgBox,
  AboutUsWrapper,
} from "../AboutUs/aboutUsStyles";

export const AboutUs = () => {
  return (
    <AboutUsWrapper disableGutters>
      <Box width="40%">
        <Typography
          variant="body2"
          color="#ffad14"
          fontWeight={600}
          marginBottom={"15px"}
        >
          DESPRE NOI
        </Typography>
        <Typography variant="h4" color="initial" marginBottom={"20px"}>
          Ești în mâini bune!
        </Typography>
        <Typography variant="body1" color="initial" padding={"0 20px 0 0"}>
          La momentul de față, RCA.md este unul dintre cei mai importanți
          participanți de pe piața de asigurări din Republica Moldova. Oferim o
          gama largă de produse de asigurare și depunem un efort zilnic să
          menținem același nivel de profesionalism, disponibilitate și dedicație
          față de clienții noștri, pe care l-am oferit din 2010 încoace. Oferim
          instrumente utile, flexibile și ușor de utilizat, ca să poți procura
          polița de asigurare de care ai nevoie timp de câteva minute, de la
          companii de asigurare de încredere, direct pe websiteul nostru.
          Încearcă și tu calculatoarele noastre intuitive, sau dă-ne un sunet și
          te ajutăm noi în cel mai scurt timp!
        </Typography>
        <CustomButton variant="contained" size="large">
          Citeste mai mult
        </CustomButton>
      </Box>
      <AboutUsImgBox />
    </AboutUsWrapper>
  );
};
