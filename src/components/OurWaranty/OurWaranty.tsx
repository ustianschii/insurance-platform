import React from "react";
import { Box, Typography } from "@mui/material";
import { CardsContainer, OurWarantyWrapper } from "./ourWarantyStyles";
import { WarantyCard } from "./WarantyCard/WarantyCard";
import BusinessIcon from "@mui/icons-material/Business";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import PowerIcon from "@mui/icons-material/Power";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PaymentIcon from "@mui/icons-material/Payment";

export const OurWaranty = () => {
  return (
    <OurWarantyWrapper disableGutters>
      <Box height={"100%"} padding={"50px 70px 50px 70px"}>
        <Typography
          variant="body2"
          color="#fa7327"
          textAlign={"center"}
          fontWeight={"bold"}
          marginBottom={"20px"}
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

        <CardsContainer>
          <WarantyCard
            icon={<BusinessIcon />}
            title="Posibilitatea de a alege"
            description="Alege compania de asigurări în care ai cea mai multă încredere."
          />
          <WarantyCard
            icon={<LocalShippingIcon />}
            title="Livrare gratuită"
            description="Îți livrăm asigurarea nou nouță la tine acasă în decurs de o zi."
          />
          <WarantyCard
            icon={<WorkHistoryIcon />}
            title="Istorie de calitate"
            description="Cu mii de clienți mulțumiți din 2010, garantăm calitate, profesionalism și asistență în timp util."
          />
          <WarantyCard
            icon={<PowerIcon />}
            title="Disponibilitate maximă"
            description="Suntem la dispoziția ta 7 zile din săptămână. Vezi orele noastre de lucru aici."
          />
          <WarantyCard
            icon={<PhoneAndroidIcon />}
            title="Acces comod"
            description="Comandă asigurarea ușor și rapid pe dispozitivul tău mobil."
          />
          <WarantyCard
            icon={<PaymentIcon />}
            title="Achitare sigură"
            description="Ai posibilități multiple de achitare, inclusiv achitare online cu cardul bancar."
          />
        </CardsContainer>
      </Box>
    </OurWarantyWrapper>
  );
};
