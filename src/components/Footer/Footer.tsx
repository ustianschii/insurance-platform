import React from "react";
import Partners from "../Partners/Partners";
import { FooterWrapper } from "./footerStyles";
import { Container, Divider } from "@mui/material";
import Links from "../Links/Links";
import Copyright from "../Copyright/Copyright";

const Footer = () => {
  return (
    <FooterWrapper>
      <Partners />
      <Container disableGutters>
        <Divider variant="fullWidth" />
      </Container>
      <Links />
      <Divider variant="fullWidth" />
      <Copyright />
    </FooterWrapper>
  );
};

export default Footer;
