import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { CustomDivider } from "../Blog/blogStyles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import fastOrderCarLogo from "../../../assets/fastOrder-car-logo.webp";
import { CustomTextField, FastOrderWrapper } from "./fastOrderStyles";

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
          <CustomTextField
            size="small"
            id="outlined-basic"
            label="Introdu numele tău"
            variant="filled"
            InputLabelProps={{
              style: { color: "gray" },
            }}
            sx={{
              bgcolor: "white",
              borderRadius: "8px",
              ".MuiInputBase-root::after": {
                border: "1px solid #01ad40",
              },
            }}
          />
          <CustomTextField
            size="small"
            id="outlined-basic"
            label="Numărul de telefon"
            variant="filled"
            InputLabelProps={{
              style: { color: "gray" },
            }}
            sx={{
              bgcolor: "white",
              borderRadius: "8px",
              ".MuiInputBase-root::after": {
                border: "1px solid #01ad40",
              },
            }}
          />
          <Button
            variant="contained"
            sx={{ bgcolor: "#00cd4a", borderRadius: "8px" }}
          >
            Solicită
            <CustomDivider orientation="vertical" flexItem />
            <KeyboardArrowRightIcon />
          </Button>
        </Box>
      </Box>
      <Box width={"400px"} height={"250px"}>
        <Box
          sx={{
            backgroundImage: `url(${fastOrderCarLogo})`,
            height: "350px",
            width: "550px",
            backgroundSize: "cover",
            marginTop: "-15px",
          }}
        />
      </Box>
    </FastOrderWrapper>
  );
};

export default FastOrder;
