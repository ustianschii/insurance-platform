import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { CustomDivider } from "../Blog/blogStyles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  CustomButton,
  FastOrderLogo,
  FastOrderWrapper,
} from "./fastOrderStyles";

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
          <TextField
            size="small"
            id="outlined-basic"
            label="Introdu numele tău"
            variant="filled"
            InputLabelProps={{
              style: { color: "gray" },
            }}
            sx={{
              backgroundColor: "white",
              borderRadius: "8px",
              ".MuiInputBase-root::after": {
                border: "1px solid #01ad40",
              },
            }}
          />
          <TextField
            size="small"
            id="outlined-basic"
            label="Numărul de telefon"
            variant="filled"
            InputLabelProps={{
              style: { color: "gray" },
            }}
            sx={{
              backgroundColor: "white",
              borderRadius: "8px",
              ".MuiInputBase-root::after": {
                border: "1px solid #01ad40",
              },
            }}
          />
          <CustomButton variant="contained">
            Solicită
            <CustomDivider orientation="vertical" flexItem />
            <KeyboardArrowRightIcon />
          </CustomButton>
        </Box>
      </Box>
      <Box width={"400px"} height={"250px"}>
        <FastOrderLogo />
      </Box>
    </FastOrderWrapper>
  );
};

export default FastOrder;
