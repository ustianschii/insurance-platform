import React from "react";
import {
  Autocomplete,
  Box,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import NameTextField from "../common/NameTextField/NameTextField";
import PhoneNumberTextField from "../common/PhoneNumberTextField/PhoneNumberTextField";
import SendButton from "../common/SendButton/SendButton";

const Reminder = () => {
  const assuranceTypes = [
    { label: "RCA" },
    { label: "Devamare" },
    { label: "Carte Verde" },
    { label: "CASCO" },
    { label: "Asigurarea sănătății" },
    { label: "Asigurarea bunurilor" },
  ];
  return (
    <Container disableGutters sx={{ height: "250px" }}>
      <Box>
        <Typography
          variant="body2"
          color="#ffad14"
          fontWeight={600}
          textAlign={"center"}
          marginBottom={"10px"}
        >
          REAMINTIRE
        </Typography>
        <Typography variant="h4" textAlign={"center"} mb={"16px"}>
          Cu noi nu uiți să reînnoiești polița!
        </Typography>
        <Typography variant="body1" textAlign={"center"} mb={"32px"}>
          Lasă datele tale mai jos și te vom contacta cu 2 săptămâni înainte de
          expirarea contractului de asigurare.
        </Typography>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Autocomplete
            disablePortal
            id="assurance-type"
            options={assuranceTypes}
            size="small"
            sx={{ width: "250px" }}
            renderInput={(params) => (
              <TextField {...params} label="Tipul asigurării" />
            )}
          />
          <DatePicker
            label="Data expirării"
            sx={{
              ".MuiInputBase-input": {
                height: "40px",
                padding: "0 0 0 0px",
              },
              ".MuiInputLabel-root": {
                marginTop: "-5px",
              },
            }}
          />
          <NameTextField />

          <PhoneNumberTextField />
          <SendButton title="Amintește-mi" />
        </Box>
      </Box>
    </Container>
  );
};

export default Reminder;
