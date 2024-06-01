import React from "react";
import Partners from "./Partners/Partners";
import { FooterWrapper } from "./footerStyles";
import { Divider } from "@mui/material";

const Footer = () => {
  return (
    <FooterWrapper>
      <Partners />
      <Divider variant="fullWidth"></Divider>
    </FooterWrapper>
  );
};

export default Footer;
