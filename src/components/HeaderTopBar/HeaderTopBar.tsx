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
          <IconButton href="https://m.me/cristi.ustianski?hash=AbZOTTEZ33jzlfMo&source=qr_link_share">
            <MessengerLogo />
          </IconButton>
          <IconButton href="https://wa.me/qr/KU3AP3YE375IO1">
            <WhatsappLogo />
          </IconButton>
          <IconButton>
            <ViberLogo />
          </IconButton>
          <IconButton href="https://t.me/cuser22">
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
