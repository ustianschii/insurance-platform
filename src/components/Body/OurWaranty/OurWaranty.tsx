import React from "react";
import { Box, Typography } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import {
  CardContainer,
  CardsContainer,
  CustomIcon,
  Description,
  OurWarantyWrapper,
  TextContainer,
  Title,
} from "./ourWarantyStyles";

export const OurWaranty = () => {
  return (
    <OurWarantyWrapper disableGutters>
      <Box display={"block"} height={"100%"} padding={"50px 70px 50px 70px"}>
        <Typography
          variant="body1"
          color="#fa7327"
          textAlign={"center"}
          fontWeight={"bold"}
          fontSize={"13px"}
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
          <CardContainer>
            <CustomIcon>
              <BusinessIcon />
            </CustomIcon>
            <TextContainer>
              <Title variant="body1">Posibilitatea de a alege</Title>
              <Description variant="body1">
                Alege compania de asigurări în care ai cea mai multă încredere.
              </Description>
            </TextContainer>
          </CardContainer>
          <CardContainer>
            <CustomIcon>
              <BusinessIcon />
            </CustomIcon>
            <TextContainer>
              <Title variant="body1">Posibilitatea de a alege</Title>
              <Description variant="body1">
                Alege compania de asigurări în care ai cea mai multă încredere.
              </Description>
            </TextContainer>
          </CardContainer>
          <CardContainer>
            <CustomIcon>
              <BusinessIcon />
            </CustomIcon>
            <TextContainer>
              <Title variant="body1">Posibilitatea de a alege</Title>
              <Description variant="body1">
                Alege compania de asigurări în care ai cea mai multă încredere.
              </Description>
            </TextContainer>
          </CardContainer>
          <CardContainer>
            <CustomIcon>
              <BusinessIcon />
            </CustomIcon>
            <TextContainer>
              <Title variant="body1">Posibilitatea de a alege</Title>
              <Description variant="body1">
                Alege compania de asigurări în care ai cea mai multă încredere.
              </Description>
            </TextContainer>
          </CardContainer>
          <CardContainer>
            <CustomIcon>
              <BusinessIcon />
            </CustomIcon>
            <TextContainer>
              <Title variant="body1">Posibilitatea de a alege</Title>
              <Description variant="body1">
                Alege compania de asigurări în care ai cea mai multă încredere.
              </Description>
            </TextContainer>
          </CardContainer>
          <CardContainer>
            <CustomIcon>
              <BusinessIcon />
            </CustomIcon>
            <TextContainer>
              <Title variant="body1">Posibilitatea de a alege</Title>
              <Description variant="body1">
                Alege compania de asigurări în care ai cea mai multă încredere.
              </Description>
            </TextContainer>
          </CardContainer>
        </CardsContainer>
      </Box>
    </OurWarantyWrapper>
  );
};
