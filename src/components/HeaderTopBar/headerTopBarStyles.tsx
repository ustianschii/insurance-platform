import {
  Container as MuiContainer,
  Box as MuiBox,
  styled,
} from "@mui/material";
import messenger from "../../assets/facebook-messenger_512x512.png";
import whatsapp from "../../assets/whatsapp_512x512.png";
import viber from "../../assets/viber.png";
import telegram from "../../assets/telegram.svg";
import romanian from "../../assets/flag-ro.svg";
import russian from "../../assets/flag-ru.svg";

export const AppBarContainer = styled(MuiContainer)(() => ({
  display: "flex",
  height: "30px",
  justifyContent: "end",
}));

export const MessengerLogo = styled(MuiBox)(() => ({
  backgroundImage: `url(${messenger})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  height: "20px",
  width: "20px",
}));

export const WhatsappLogo = styled(MuiBox)(() => ({
  backgroundImage: `url(${whatsapp})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  height: "20px",
  width: "20px",
}));

export const ViberLogo = styled(MuiBox)(() => ({
  backgroundImage: `url(${viber})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  height: "23px",
  width: "23px",
}));

export const TelegramLogo = styled(MuiBox)(() => ({
  backgroundImage: `url(${telegram})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  height: "20px",
  width: "20px",
}));
export const RomanianLanguageLogo = styled(MuiBox)(() => ({
  backgroundImage: `url(${romanian})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  height: "27px",
  width: "27px",
  margin: "8px 10px 0 0",
}));
export const RussianLanguageLogo = styled(MuiBox)(() => ({
  backgroundImage: `url(${russian})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  height: "27px",
  width: "27px",
  margin: "8px 10px 0 0",
}));
