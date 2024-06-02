import React from "react";
import {
  AppBarContainer,
  MessengerLogo,
  RomanianLanguageLogo,
  RussianLanguageLogo,
  TelegramLogo,
  ViberLogo,
  WhatsappLogo,
} from "./headerTopBarStyles";
import { Box, IconButton, Typography } from "@mui/material";

const HeaderTopBar = () => {
  return (
    <AppBarContainer disableGutters>
      <Box display={"flex"}>
        <Box
          display={"flex"}
          width={"170px"}
          marginRight={"30px"}
          justifyContent={"space-between"}
        >
          <IconButton>
            <MessengerLogo />
          </IconButton>
          <IconButton>
            <WhatsappLogo />
          </IconButton>
          <IconButton>
            <ViberLogo />
          </IconButton>
          <IconButton>
            <TelegramLogo />
          </IconButton>
        </Box>

        <Box display={"flex"}>
          <IconButton>
            <RomanianLanguageLogo />
            <Typography>RO</Typography>
          </IconButton>
          <IconButton>
            <RussianLanguageLogo />
            <Typography>RU</Typography>
          </IconButton>
        </Box>
      </Box>
    </AppBarContainer>
  );
};

export default HeaderTopBar;
