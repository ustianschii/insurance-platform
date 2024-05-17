import React from "react";
import {
  WalppaperContainer,
  MainWrapper,
  WallpaperTextContainer,
} from "./bodyStyles";
import { AboutUsWrapper } from "./AboutUs/AboutUs";
import { OfferCardsContainer } from "./OfferCard/offerCardStyles";
import { OfferCard } from "./OfferCard/OfferCard";
import { Box, Typography, Container, SvgIcon } from "@mui/material";
import { OfferCardBig } from "./OfferCardBig/OfferCardBig";
import firstCardLogo from "../../assets/cardLogo.jpeg";
import secondCardLogo from "../../assets/car-2b.jpeg";
import thirdCardLogo from "../../assets/car-3b.jpeg";
import firstBigCardLogo from "../../assets/pic-block-1-300x213.jpeg";
import secondBigCardLogo from "../../assets/pic-block-2.jpeg";
import ourWarantyBlockBG from "../../assets/bg-our-waranty.png";
import BusinessIcon from "@mui/icons-material/Business";

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
      <AboutUsWrapper />
      <Container
        disableGutters
        sx={{
          height: "550px",
          backgroundColor: "#1d2750",
          backgroundImage: `url(${ourWarantyBlockBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "15px",
        }}
      >
        <Box
          sx={{
            display: "block",
            height: "100%",
            paddingY: "50px",
            paddingX: "70px",
          }}
        >
          <Typography
            variant="body1"
            color="white"
            textAlign={"center"}
            sx={{
              color: "#fa7327",
              fontWeight: "bold",
              fontSize: "13px",
              marginBottom: "20px",
            }}
          >
            SERVICE
          </Typography>
          <Typography
            variant="h3"
            color="white"
            textAlign={"center"}
            margin={"0 0 25px 0"}
          >
            Noi garantăm
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              height: "320px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                height: "50%",
                width: "33%",
                padding: "20px",
                marginBottom: "20px",
              }}
            >
              <SvgIcon
                sx={{
                  height: "70px",
                  width: "65px",
                  marginRight: "10px",
                  color: "#00cd4a",
                }}
              >
                <BusinessIcon />
              </SvgIcon>
              <Box sx={{ textWrap: "wrap" }}>
                <Typography
                  variant="body1"
                  color="white"
                  sx={{ height: "30%", fontWeight: "bold", fontSize: "20px" }}
                >
                  Posibilitatea de a alege
                </Typography>
                <Typography
                  variant="body1"
                  color="white"
                  sx={{ textWrap: "wrap", fontSize: "15px" }}
                >
                  Alege compania de asigurări în care ai cea mai multă
                  încredere.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ height: "50%", width: "33%" }}>Livrare gratuită</Box>
            <Box sx={{ height: "50%", width: "33%" }}>Istorie de calitate</Box>
            <Box sx={{ height: "50%", width: "33%" }}>
              Disponibilitate maximă
            </Box>
            <Box sx={{ height: "50%", width: "33%" }}>Acces comod</Box>
            <Box sx={{ height: "50%", width: "33%" }}>Achitare sigură</Box>
          </Box>
        </Box>
      </Container>
    </MainWrapper>
  );
};

export default Body;
