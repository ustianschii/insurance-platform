import React from "react";
import {
  WalppaperContainer,
  OffersContainer,
  MainWrapper,
  WallpaperTextContainer,
  AboutUsContainer,
} from "./bodyStyles";
import { OfferCard } from "./OfferCard/OfferCard";
import { Box, Button, Typography } from "@mui/material";

const Body = () => {
  return (
    <MainWrapper>
      <WalppaperContainer>
        <WallpaperTextContainer>
          <Typography variant="h3" marginBottom={"30px"}>
            Asigurări online într-o clipă
          </Typography>
          <Typography variant="h6" width={"45%"}>
            Calculează și procură polițe de asigurare pentru automobilul și
            familia ta, într-un mod securizat, interactiv și rapid. Livrăm
            polița în aceeași zi în raza orașului Chișinău!
          </Typography>
        </WallpaperTextContainer>
      </WalppaperContainer>
      <OffersContainer>
        <OfferCard></OfferCard>
        <OfferCard></OfferCard>
        <OfferCard></OfferCard>
        <OfferCard></OfferCard>
        <OfferCard></OfferCard>
      </OffersContainer>
      <AboutUsContainer>
        <Box>
          <Typography
            variant="body2"
            color="initial"
            sx={{ color: "#ffad14", fontWeight: "600" }}
          >
            DESPRE NOI
          </Typography>
          <Typography variant="h4" color="initial">
            Ești în mâini bune!
          </Typography>
          <Typography variant="body1" color="initial">
            La momentul de față, RCA.md este unul dintre cei mai importanți
            participanți de pe piața de asigurări din Republica Moldova. Oferim
            o gama largă de produse de asigurare și depunem un efort zilnic să
            menținem același nivel de profesionalism, disponibilitate și
            dedicație față de clienții noștri, pe care l-am oferit din 2010
            încoace. Oferim instrumente utile, flexibile și ușor de utilizat, ca
            să poți procura polița de asigurare de care ai nevoie timp de câteva
            minute, de la companii de asigurare de încredere, direct pe
            websiteul nostru. Încearcă și tu calculatoarele noastre intuitive,
            sau dă-ne un sunet și te ajutăm noi în cel mai scurt timp!
          </Typography>
          <Button></Button>
        </Box>
        <Box>image</Box>
      </AboutUsContainer>
    </MainWrapper>
  );
};

export default Body;
