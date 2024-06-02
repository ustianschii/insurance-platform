import React from "react";
import { Typography } from "@mui/material";
import { CopyrightWrapper, MasterCardLogo, VisaLogo } from "./copyrightStyles";

const Copyright = () => {
  return (
    <CopyrightWrapper disableGutters>
      <VisaLogo />
      <MasterCardLogo />
      <Typography variant="body2" paddingTop={"5px"}>
        Copyright © 2024 Online Broker de Asigurare SRL. Toate drepturile
        rezervate. Website creat de New Light Digital.
      </Typography>
    </CopyrightWrapper>
  );
};

export default Copyright;
