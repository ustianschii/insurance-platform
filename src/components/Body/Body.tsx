import {
  WalppaperContainer,
  MainWrapper,
  WallpaperTextContainer,
} from "./bodyStyles";
import { AboutUs } from "../AboutUs/AboutUs";
import { OfferCardsContainer } from "../OfferCard/offerCardStyles";
import { OfferCard } from "../OfferCard/OfferCard";
import { Typography } from "@mui/material";
import { OfferCardBig } from "../OfferCardBig/OfferCardBig";
import firstCardLogo from "../../assets/cardLogo.jpeg";
import secondCardLogo from "../../assets/car-2b.jpeg";
import thirdCardLogo from "../../assets/car-3b.jpeg";
import firstBigCardLogo from "../../assets/pic-block-1-300x213.jpeg";
import secondBigCardLogo from "../../assets/pic-block-2.jpeg";
import { OurWaranty } from "../OurWaranty/OurWaranty";
import Reviews from "../Reviews/Reviews";
import Blog from "../Blog/Blog";
import FastOrder from "../FastOrder/FastOrder";
import Reminder from "../Reminder/Reminder";

const Body = () => {
  return (
    <MainWrapper>
      <WalppaperContainer>
        <WallpaperTextContainer>
          <Typography variant="h3" marginTop={"75px"}>
            Asigurări online într-o clipă
          </Typography>
          <Typography
            width={"45%"}
            fontSize={"17px"}
            fontWeight={"500"}
            marginTop={"30px"}
          >
            Calculează și procură polițe de asigurare pentru automobilul și
            familia ta, într-un mod securizat, interactiv și rapid. Livrăm
            polița în aceeași zi în raza orașului Chișinău!
          </Typography>
        </WallpaperTextContainer>
      </WalppaperContainer>
      <OfferCardsContainer disableGutters>
        <OfferCard
          title={"RCA"}
          description="Asigurarea obligatorie a vehiculelor în RM"
          logo={firstCardLogo}
          badgeTitle={"de la"}
          badgePrice={283}
          badgeCurrency="lei"
        ></OfferCard>
        <OfferCard
          title={"Carte Verde"}
          description="Asigurarea obligatorie a vehiculelor în străinătate"
          logo={secondCardLogo}
          badgeTitle={"de la"}
          badgePrice={57}
          badgeCurrency="lei"
        ></OfferCard>
        <OfferCard
          title={"CASCO"}
          description="Asigurarea complexă a vehiculelor, cu o gamă largă de opțiuni"
          logo={thirdCardLogo}
          badgeTitle={"de la"}
          badgePrice={3000}
          badgeCurrency="lei"
        ></OfferCard>
        <OfferCardBig
          title="Asigurarea sănătății"
          description="Asigurarea de sănătate de cea mai înaltă calitate, în RM și când călătorești peste hotare"
          logo={firstBigCardLogo}
          badgeTitle={"de la"}
          badgePrice={45}
          badgeCurrency="lei"
        ></OfferCardBig>
        <OfferCardBig
          title="Asigurarea bunurilor"
          description="Asigurarea pe termen scurt și lung a bunurilor mobile sau imobiliare în RM"
          logo={secondBigCardLogo}
          badgeTitle={"de la"}
          badgePrice={201}
          badgeCurrency="lei"
        ></OfferCardBig>
      </OfferCardsContainer>
      <AboutUs />
      <OurWaranty />
      <Reviews />
      <Blog />
      <FastOrder />
      <Reminder />
    </MainWrapper>
  );
};

export default Body;
