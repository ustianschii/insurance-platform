import React from "react";
import { Link, Typography, IconButton } from "@mui/material";
import {
  AssuranceTypesWrapper,
  ButtonsWrapper,
  LinksSection,
  LinksWrapper,
  LogoWrapper,
} from "./linksStyles";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";

const Links = () => {
  return (
    <LinksWrapper disableGutters>
      <LinksSection>
        <LogoWrapper />
        <Typography marginBottom={"40px"}>
          Adresa : Str. A. Bernardazzi 33 <br />
          Mun. Chișinău, MD-2001 <br />
          Republica Moldova
        </Typography>
        <Typography>
          Telefon mob: <Link underline="none">0 (60) 544 111</Link>
          <br />
          Telefon staț.: <Link underline="none">0 (22) 544 111</Link>
        </Typography>
      </LinksSection>
      <LinksSection>
        <Typography variant="h6" marginBottom={"25px"}>
          Toate asigurarile
        </Typography>
        <AssuranceTypesWrapper underline="none">
          <Typography>RCA</Typography>
          <Typography>CASCO</Typography>
          <Typography>Carte Verde</Typography>
          <Typography>Asigurarea sănătății</Typography>
          <Typography>Asigurarea bunurilor</Typography>
        </AssuranceTypesWrapper>
      </LinksSection>
      <LinksSection>
        <Typography variant="h6" marginBottom={"25px"}>
          Despre RCA.MD
        </Typography>
        <AssuranceTypesWrapper underline="none">
          <Typography>Echipa noastră</Typography>
          <Typography>Blog</Typography>
          <Typography>Întrebări frecvente</Typography>
          <Typography>Contacte</Typography>
        </AssuranceTypesWrapper>
      </LinksSection>
      <LinksSection>
        <Typography variant="h6" marginBottom={"25px"}>
          Suport clienți
        </Typography>
        <AssuranceTypesWrapper underline="none">
          <Typography>Cum comand?</Typography>
          <Typography>În caz de accident</Typography>
          <Typography>Condiții de livrare</Typography>
          <ButtonsWrapper>
            <IconButton>
              <FacebookOutlinedIcon fontSize="large" />
            </IconButton>
            <IconButton>
              <InstagramIcon fontSize="large" />
            </IconButton>
          </ButtonsWrapper>
        </AssuranceTypesWrapper>
      </LinksSection>
    </LinksWrapper>
  );
};

export default Links;
