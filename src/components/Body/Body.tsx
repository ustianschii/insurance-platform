import React from "react";
import {
  WalppaperContainer,
  MainWrapper,
  WallpaperTextContainer,
  AboutUsContainer,
} from "./bodyStyles";
import { OfferCardsContainer } from "./OfferCard/offerCardStyles";
import { OfferCard } from "./OfferCard/OfferCard";
import { Box, Button, Typography } from "@mui/material";
import { OfferCardBig } from "./OfferCardBig/OfferCardBig";
import firstCardLogo from "../../assets/cardLogo.jpeg";
import secondCardLogo from "../../assets/car-2b.jpeg";
import thirdCardLogo from "../../assets/car-3b.jpeg";
import firstBigCardLogo from "../../assets/pic-block-1-300x213.jpeg";
import secondBigCardLogo from "../../assets/pic-block-2.jpeg";

const Body = () => {
  return (
    <MainWrapper>
      <WalppaperContainer>
        <WallpaperTextContainer>
          <Typography variant="h3" marginTop={"75px"}>
            Asigurări online într-o clipă
          </Typography>
          <Typography
            variant="h6"
            width={"45%"}
            fontSize={"16px"}
            marginTop={"30px"}
          >
            Calculează și procură polițe de asigurare pentru automobilul și
            familia ta, într-un mod securizat, interactiv și rapid. Livrăm
            polița în aceeași zi în raza orașului Chișinău!
          </Typography>
        </WallpaperTextContainer>
      </WalppaperContainer>
      <OfferCardsContainer>
        <OfferCard
          title={"RCA"}
          description="Asigurarea obligatorie a vehiculelor în RM"
          logo={firstCardLogo}
        ></OfferCard>
        <OfferCard
          title={"Carte Verde"}
          description="Asigurarea obligatorie a vehiculelor în străinătate"
          logo={secondCardLogo}
        ></OfferCard>
        <OfferCard
          title={"CASCO"}
          description="Asigurarea complexă a vehiculelor, cu o gamă largă de opțiuni"
          logo={thirdCardLogo}
        ></OfferCard>
        <OfferCardBig
          title="Asigurarea sănătății"
          description="Asigurarea de sănătate de cea mai înaltă calitate, în RM și când călătorești peste hotare"
          logo={firstBigCardLogo}
        ></OfferCardBig>
        <OfferCardBig
          title="Asigurarea bunurilor"
          description="Asigurarea pe termen scurt și lung a bunurilor mobile sau imobiliare în RM"
          logo={secondBigCardLogo}
        ></OfferCardBig>
      </OfferCardsContainer>
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
