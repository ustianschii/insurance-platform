import React from "react";
import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  AccordionSummary,
  Accordion,
  AccordionDetails,
} from "@mui/material";
import {
  CarLogo,
  ConstructorWrapper,
  FAQWrapper,
  FastOrderWrapper,
  GoodToKnowWrapper,
  TopBanner,
  ResultWrapper,
} from "./orderPageStyles";
import NameTextField from "../common/NameTextField/NameTextField";
import PhoneNumberTextField from "../common/PhoneNumberTextField/PhoneNumberTextField";
import SendButton from "../common/SendButton/SendButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HorizontalLinearStepper from "../HorizontalLinearStepper/HorizontalLinearStepper";

const OrderPage = () => {
  return (
    <Container disableGutters>
      <TopBanner disableGutters>
        <Typography
          display={"flex"}
          fontSize={"40px"}
          color="initial"
          alignItems={"center"}
          p={"35px"}
        >
          Completează formularul de comandă pentru a obține cel mai bun preț
          pentru CASCO!
        </Typography>
        <CarLogo />
      </TopBanner>
      <Box display={"flex"}>
        <Box maxWidth={"25%"}>
          <FastOrderWrapper>
            <Typography variant="h5" mb={"10px"}>
              Nu ai timp pentru a crea comanda online?
            </Typography>
            <Typography variant="body1" mb={"10px"} color={"gray"}>
              Lasă un număr de telefon și te vom contacta în 15 minute.
            </Typography>
            <Box>
              <Typography variant="body1" color={"gray"} mb={"5px"}>
                Numele și prenumele
              </Typography>
              <NameTextField fullWidth={true} label="Numele tău" />
            </Box>
            <Box mb={"10px"}>
              <Typography variant="body1" color={"gray"} mb={"5px"} mt={"10px"}>
                Numărul de telefon
              </Typography>
              <PhoneNumberTextField fullWidth={true} />
            </Box>
            <SendButton title="Solicită" fullWidth={true} />
          </FastOrderWrapper>
          <GoodToKnowWrapper>
            <List>
              <ListItem>
                <ListItemText>
                  <Typography variant="h5">Bine de știut</Typography>
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText>În ce constă Asigurarea CASCO?</ListItemText>
                <IconButton>
                  <KeyboardArrowRightIcon />
                </IconButton>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText>
                  Ce acțiuni întreprindeți dacă sunteți implicat într-un
                  accident rutier?
                </ListItemText>
                <IconButton>
                  <KeyboardArrowRightIcon />
                </IconButton>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText>
                  <Typography variant="body1" color="#01AD40">
                    Vezi toate articolele
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </GoodToKnowWrapper>
          <FAQWrapper>
            <List>
              <ListItem>
                <ListItemText>
                  <Typography variant="h5">Bine de știut</Typography>
                </ListItemText>
              </ListItem>
              <Divider />
              <Accordion disableGutters>
                <AccordionSummary
                  expandIcon={
                    <Box color="#2d53f6">
                      <KeyboardArrowDownIcon />
                    </Box>
                  }
                >
                  Ce reprezintă asigurarea CASCO?
                </AccordionSummary>
                <AccordionDetails>
                  Polița de asigurare CASCO este o asigurare facultativă care se
                  încheie pentru autovehiculele ce au fost supuse înmatriculării
                  și acoperă pagubele produse autovehiculului în urma unor
                  avarii accidentale, fenomene naturale, vandalism, conform
                  condițiilor de asigurare agreate la momentul emiterii poliței
                  de asigurare.
                </AccordionDetails>
              </Accordion>
              <Accordion disableGutters>
                <AccordionSummary
                  expandIcon={
                    <Box color="#2d53f6">
                      <KeyboardArrowDownIcon />
                    </Box>
                  }
                >
                  Ce reprezintă suma asigurată?
                </AccordionSummary>
                <AccordionDetails>
                  Suma asigurata reprezintă valoarea reală (valoarea de piață) a
                  mașinii în momentul încheierii poliței de asigurare CASCO.
                  Pentru autovehiculele noi suma asigurată o reprezintă prețul
                  de achiziție. Pentru autovehiculele second hand, suma
                  asigurată se stabilește aplicând la valoarea de nou (valoare
                  de catalog / factura achiziție de nou) grila de uzură a
                  asiguratorului, în funcție de vechimea vehiculului la momentul
                  preluării în asigurare.
                </AccordionDetails>
              </Accordion>
              <Accordion disableGutters>
                <AccordionSummary
                  expandIcon={
                    <Box color="#2d53f6">
                      <KeyboardArrowDownIcon />
                    </Box>
                  }
                >
                  Ce reprezintă cota/tariful de asigurare?
                </AccordionSummary>
                <AccordionDetails>
                  Cota de asigurare este procentul aplicat la suma asigurată
                  pentru a rezulta prima anuală de asigurare. Cota de asigurare
                  se stabilește în funcție de mai multe criterii de calcul
                  dintre care: valoarea mașinii, anul producerii, proprietarul
                  mașinii (de ex. vârsta pentru persoanele fizice sau obiectul
                  de activitate pentru persoanele juridice), marca
                  autovehiculului, teritoriul de acoperire, etc. Criteriile de
                  calcul a cotei de asigurare sunt stabilite de către fiecare
                  asigurător în parte în funcție de normele actuariale interne
                  ale fiecăruia.
                </AccordionDetails>
              </Accordion>
              <ListItem>
                <ListItemText>
                  <Typography variant="body1" color="#01AD40">
                    Toate întrebările
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </FAQWrapper>
        </Box>
        <Box maxWidth={"70%"}>
          <Box display={"flex"}>
            <ConstructorWrapper>
              <Box>
                <HorizontalLinearStepper />
              </Box>
            </ConstructorWrapper>
            <ResultWrapper>total</ResultWrapper>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default OrderPage;
