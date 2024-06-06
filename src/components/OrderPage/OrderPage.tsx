import React from "react";
import { Typography } from "@mui/material";
import { CarLogo, TopBanner } from "./orderPageStyles";

const OrderPage = () => {
  return (
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
  );
};

export default OrderPage;
