import { OfferCard } from "../OfferCard/OfferCard";
import { OfferCardBig } from "../OfferCardBig/OfferCardBig";
import firstCardLogo from "../../assets/cardLogo.jpeg";
import secondCardLogo from "../../assets/car-2b.jpeg";
import thirdCardLogo from "../../assets/car-3b.jpeg";
import firstBigCardLogo from "../../assets/pic-block-1-300x213.jpeg";
import secondBigCardLogo from "../../assets/pic-block-2.jpeg";
import {
  BigOfferCards,
  MainServicesContainer,
  SmallOfferCards,
} from "./mainServicesStyles";

const MainServices = () => {
  return (
    <MainServicesContainer disableGutters>
      <SmallOfferCards>
        <OfferCard
          title={"RCA"}
          description="Asigurarea obligatorie a vehiculelor în RM"
          logo={firstCardLogo}
          badgeTitle={"de la"}
          badgePrice={283}
          badgeCurrency="lei"
          link=""
        ></OfferCard>
        <OfferCard
          title={"Carte Verde"}
          description="Asigurarea obligatorie a vehiculelor în străinătate"
          logo={secondCardLogo}
          badgeTitle={"de la"}
          badgePrice={57}
          badgeCurrency="lei"
          link=""
        ></OfferCard>
        <OfferCard
          title={"CASCO"}
          description="Asigurarea complexă a vehiculelor, cu o gamă largă de opțiuni"
          logo={thirdCardLogo}
          badgeTitle={"de la"}
          badgePrice={3000}
          badgeCurrency="lei"
          link="/casco"
        ></OfferCard>
      </SmallOfferCards>
      <BigOfferCards>
        <OfferCardBig
          title="Asigurarea sănătății"
          description="Asigurarea de sănătate de cea mai înaltă calitate, în RM și când călătorești peste hotare"
          logo={firstBigCardLogo}
          badgeTitle={"de la"}
          badgePrice={45}
          badgeCurrency="lei"
          link=""
        ></OfferCardBig>
        <OfferCardBig
          title="Asigurarea bunurilor"
          description="Asigurarea pe termen scurt și lung a bunurilor mobile sau imobiliare în RM"
          logo={secondBigCardLogo}
          badgeTitle={"de la"}
          badgePrice={201}
          badgeCurrency="lei"
          link=""
        ></OfferCardBig>
      </BigOfferCards>
    </MainServicesContainer>
  );
};

export default MainServices;
