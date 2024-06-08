import { Box, Typography } from "@mui/material";
import { FastOrderLogo, FastOrderWrapper } from "./fastOrderStyles";
import NameTextField from "../common/NameTextField/NameTextField";
import PhoneNumberTextField from "../common/PhoneNumberTextField/PhoneNumberTextField";
import SendButton from "../common/SendButton/SendButton";

const FastOrder = () => {
  return (
    <FastOrderWrapper disableGutters>
      <Box width={"62%"} p={"50px 50px"} color={"white"}>
        <Typography variant="h4" mb={"20px"}>
          Nu ai timp pentru a crea comanda online?
        </Typography>
        <Typography variant="body1" mb={"30px"}>
          Lasă un număr de telefon și te vom contacta în 5 minute.
        </Typography>
        <Box display={"flex"} justifyContent={"space-between"} width={"95%"}>
          <NameTextField fullWidth={false} label="Numele tău" width="" />
          <PhoneNumberTextField fullWidth={false} />
          <SendButton title="Solicită" fullWidth={false} />
        </Box>
      </Box>
      <Box width={"400px"} height={"250px"}>
        <FastOrderLogo />
      </Box>
    </FastOrderWrapper>
  );
};

export default FastOrder;
